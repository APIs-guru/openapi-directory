import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostNotificationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=notify_on_copy" })
  notifyOnCopy?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=notify_user_actions" })
  notifyUserActions?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=send_interval" })
  sendInterval?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PostNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostNotificationsRequestBody;
}


export class PostNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationEntity?: shared.NotificationEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
