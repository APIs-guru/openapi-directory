import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReserveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @Metadata({ data: "json, name=connector" })
  connector?: string;

  @Metadata({ data: "json, name=driver" })
  driver?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class ReserveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: ReserveRequestBody;
}


export class Reserve201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class ReserveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reserve201ApplicationJsonObject?: Reserve201ApplicationJson;
}
