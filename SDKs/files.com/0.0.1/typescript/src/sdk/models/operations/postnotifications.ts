import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostNotificationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=group_id" })
  groupId?: number;

  @Metadata({ data: "multipart_form, name=notify_on_copy" })
  notifyOnCopy?: boolean;

  @Metadata({ data: "multipart_form, name=notify_user_actions" })
  notifyUserActions?: boolean;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "multipart_form, name=send_interval" })
  sendInterval?: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;

  @Metadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PostNotificationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostNotificationsRequestBody;
}


export class PostNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notificationEntity?: shared.NotificationEntity;

  @Metadata()
  statusCode: number;
}
