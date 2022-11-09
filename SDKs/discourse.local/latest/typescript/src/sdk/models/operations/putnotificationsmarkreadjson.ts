import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutNotificationsMarkReadJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class PutNotificationsMarkReadJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PutNotificationsMarkReadJsonRequestBody;
}


export class PutNotificationsMarkReadJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: string;
}


export class PutNotificationsMarkReadJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putNotificationsMarkReadJson200ApplicationJsonObject?: PutNotificationsMarkReadJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
