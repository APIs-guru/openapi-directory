import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchNotificationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchNotificationsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=notify_on_copy" })
  notifyOnCopy?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=notify_user_actions" })
  notifyUserActions?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=send_interval" })
  sendInterval?: string;
}


export class PatchNotificationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchNotificationsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchNotificationsIdRequestBody;
}


export class PatchNotificationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationEntity?: shared.NotificationEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
