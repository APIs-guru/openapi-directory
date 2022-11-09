import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemotestartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @Metadata({ data: "json, name=connector" })
  connector?: string;

  @Metadata({ data: "json, name=driver" })
  driver?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class RemotestartRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: RemotestartRequestBody;
}


export class Remotestart201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class RemotestartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  remotestart201ApplicationJsonObject?: Remotestart201ApplicationJson;
}
