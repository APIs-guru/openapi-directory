import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutNotificationsMarkReadJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class PutNotificationsMarkReadJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;
}


export class PutNotificationsMarkReadJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutNotificationsMarkReadJsonRequestBody;
}


export class PutNotificationsMarkReadJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putNotificationsMarkReadJson200ApplicationJsonObject?: PutNotificationsMarkReadJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
