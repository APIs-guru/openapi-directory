import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTIdNotificationsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostTIdNotificationsJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}

export enum PostTIdNotificationsJsonRequestBodyNotificationLevelEnum {
    Zero = "0"
,    One = "1"
,    Two = "2"
,    Three = "3"
}


export class PostTIdNotificationsJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=notification_level" })
  notificationLevel: PostTIdNotificationsJsonRequestBodyNotificationLevelEnum;
}


export class PostTIdNotificationsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTIdNotificationsJsonPathParams;

  @Metadata()
  headers: PostTIdNotificationsJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostTIdNotificationsJsonRequestBody;
}


export class PostTIdNotificationsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: string;
}


export class PostTIdNotificationsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postTIdNotificationsJson200ApplicationJsonObject?: PostTIdNotificationsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
