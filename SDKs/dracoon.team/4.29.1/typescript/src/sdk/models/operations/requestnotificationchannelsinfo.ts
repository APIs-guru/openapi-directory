import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestNotificationChannelsInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestNotificationChannelsInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestNotificationChannelsInfoHeaders;
}


export class RequestNotificationChannelsInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  notificationChannelList?: shared.NotificationChannelList;

  @Metadata()
  statusCode: number;
}
