import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestListOfNotificationConfigsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestListOfNotificationConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestListOfNotificationConfigsHeaders;
}


export class RequestListOfNotificationConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  notificationConfigList?: shared.NotificationConfigList;

  @SpeakeasyMetadata()
  statusCode: number;
}
