import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTIdNotificationsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostTIdNotificationsJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}

export enum PostTIdNotificationsJsonRequestBodyNotificationLevelEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}


export class PostTIdNotificationsJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification_level" })
  notificationLevel: PostTIdNotificationsJsonRequestBodyNotificationLevelEnum;
}


export class PostTIdNotificationsJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;
}


export class PostTIdNotificationsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTIdNotificationsJsonPathParams;

  @SpeakeasyMetadata()
  headers: PostTIdNotificationsJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTIdNotificationsJsonRequestBody;
}


export class PostTIdNotificationsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postTIdNotificationsJson200ApplicationJsonObject?: PostTIdNotificationsJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
