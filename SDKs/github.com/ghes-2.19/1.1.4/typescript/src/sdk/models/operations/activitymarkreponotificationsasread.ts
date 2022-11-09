import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivityMarkRepoNotificationsAsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityMarkRepoNotificationsAsReadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_read_at" })
  lastReadAt?: Date;
}


export class ActivityMarkRepoNotificationsAsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityMarkRepoNotificationsAsReadPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActivityMarkRepoNotificationsAsReadRequestBody;
}


export class ActivityMarkRepoNotificationsAsRead202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ActivityMarkRepoNotificationsAsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  activityMarkRepoNotificationsAsRead202ApplicationJsonObject?: ActivityMarkRepoNotificationsAsRead202ApplicationJson;
}
