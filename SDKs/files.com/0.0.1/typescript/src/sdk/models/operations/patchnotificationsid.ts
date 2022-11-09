import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchNotificationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchNotificationsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=notify_on_copy" })
  notifyOnCopy?: boolean;

  @Metadata({ data: "multipart_form, name=notify_user_actions" })
  notifyUserActions?: boolean;

  @Metadata({ data: "multipart_form, name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "multipart_form, name=send_interval" })
  sendInterval?: string;
}


export class PatchNotificationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchNotificationsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchNotificationsIdRequestBody;
}


export class PatchNotificationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notificationEntity?: shared.NotificationEntity;

  @Metadata()
  statusCode: number;
}
