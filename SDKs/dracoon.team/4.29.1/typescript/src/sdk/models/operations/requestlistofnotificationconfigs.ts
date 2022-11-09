import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestListOfNotificationConfigsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestListOfNotificationConfigsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestListOfNotificationConfigsHeaders;
}


export class RequestListOfNotificationConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  notificationConfigList?: shared.NotificationConfigList;

  @Metadata()
  statusCode: number;
}
