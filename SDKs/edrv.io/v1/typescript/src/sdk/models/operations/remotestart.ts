import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemotestartRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @SpeakeasyMetadata({ data: "json, name=connector" })
  connector?: string;

  @SpeakeasyMetadata({ data: "json, name=driver" })
  driver?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class Remotestart201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class RemotestartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemotestartRequestBody;
}


export class RemotestartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  remotestart201ApplicationJsonObject?: Remotestart201ApplicationJson;
}
