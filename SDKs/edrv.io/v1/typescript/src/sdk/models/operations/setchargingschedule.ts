import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetchargingscheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class Setchargingschedule201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class SetchargingscheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setchargingschedule201ApplicationJsonObject?: Setchargingschedule201ApplicationJson;
}
