import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityMarkNotificationsAsReadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_read_at" })
  lastReadAt?: Date;

  @Metadata({ data: "json, name=read" })
  read?: boolean;
}


export class ActivityMarkNotificationsAsReadRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ActivityMarkNotificationsAsReadRequestBody;
}


export class ActivityMarkNotificationsAsRead202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ActivityMarkNotificationsAsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  activityMarkNotificationsAsRead202ApplicationJsonObject?: ActivityMarkNotificationsAsRead202ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;
}
