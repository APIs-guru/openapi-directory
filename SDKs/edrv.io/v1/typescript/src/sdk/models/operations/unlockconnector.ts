import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnlockconnectorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @SpeakeasyMetadata({ data: "json, name=connector" })
  connector?: string;
}


export class Unlockconnector201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class UnlockconnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UnlockconnectorRequestBody;
}


export class UnlockconnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unlockconnector201ApplicationJsonObject?: Unlockconnector201ApplicationJson;
}
