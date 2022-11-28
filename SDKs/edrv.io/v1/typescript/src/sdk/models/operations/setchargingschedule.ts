import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Setchargingschedule201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class SetchargingscheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SetchargingscheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setchargingschedule201ApplicationJsonObject?: Setchargingschedule201ApplicationJson;
}
