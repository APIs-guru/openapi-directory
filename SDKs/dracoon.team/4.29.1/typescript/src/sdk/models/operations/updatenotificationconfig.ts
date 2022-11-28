import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNotificationConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateNotificationConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateNotificationConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNotificationConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateNotificationConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NotificationConfigChangeRequest;
}


export class UpdateNotificationConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  notificationConfig?: shared.NotificationConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
