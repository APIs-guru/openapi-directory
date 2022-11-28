import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityMarkNotificationsAsReadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_read_at" })
  lastReadAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;
}


export class ActivityMarkNotificationsAsRead202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ActivityMarkNotificationsAsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActivityMarkNotificationsAsReadRequestBody;
}


export class ActivityMarkNotificationsAsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  activityMarkNotificationsAsRead202ApplicationJsonObject?: ActivityMarkNotificationsAsRead202ApplicationJson;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
