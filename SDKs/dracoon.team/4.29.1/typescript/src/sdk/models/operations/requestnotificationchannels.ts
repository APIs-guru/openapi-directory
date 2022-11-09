import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestNotificationChannelsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestNotificationChannelsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestNotificationChannelsHeaders;
}


export class RequestNotificationChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  notificationChannelList?: shared.NotificationChannelList;

  @Metadata()
  statusCode: number;
}
