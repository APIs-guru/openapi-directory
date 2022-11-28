import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletechargingscheduleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class Deletechargingschedule201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class DeletechargingscheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeletechargingscheduleRequestBody;
}


export class DeletechargingscheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deletechargingschedule201ApplicationJsonObject?: Deletechargingschedule201ApplicationJson;
}
