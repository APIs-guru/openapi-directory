import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnlockconnectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @Metadata({ data: "json, name=connector" })
  connector?: string;
}


export class UnlockconnectorRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: UnlockconnectorRequestBody;
}


export class Unlockconnector201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class UnlockconnectorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unlockconnector201ApplicationJsonObject?: Unlockconnector201ApplicationJson;
}
