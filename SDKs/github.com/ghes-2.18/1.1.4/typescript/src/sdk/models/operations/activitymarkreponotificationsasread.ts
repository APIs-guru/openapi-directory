import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivityMarkRepoNotificationsAsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityMarkRepoNotificationsAsReadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_read_at" })
  lastReadAt?: Date;
}


export class ActivityMarkRepoNotificationsAsRead202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ActivityMarkRepoNotificationsAsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityMarkRepoNotificationsAsReadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActivityMarkRepoNotificationsAsReadRequestBody;
}


export class ActivityMarkRepoNotificationsAsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  activityMarkRepoNotificationsAsRead202ApplicationJsonObject?: ActivityMarkRepoNotificationsAsRead202ApplicationJson;
}
