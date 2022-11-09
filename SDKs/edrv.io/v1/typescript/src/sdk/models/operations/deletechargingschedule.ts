import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletechargingscheduleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class DeletechargingscheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: DeletechargingscheduleRequestBody;
}


export class Deletechargingschedule201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class DeletechargingscheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deletechargingschedule201ApplicationJsonObject?: Deletechargingschedule201ApplicationJson;
}
