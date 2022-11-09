import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNotificationConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateNotificationConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateNotificationConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNotificationConfigPathParams;

  @Metadata()
  headers: UpdateNotificationConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NotificationConfigChangeRequest;
}


export class UpdateNotificationConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  notificationConfig?: shared.NotificationConfig;

  @Metadata()
  statusCode: number;
}
