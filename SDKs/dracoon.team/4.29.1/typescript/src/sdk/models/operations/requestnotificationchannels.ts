import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestNotificationChannelsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestNotificationChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestNotificationChannelsHeaders;
}


export class RequestNotificationChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  notificationChannelList?: shared.NotificationChannelList;

  @SpeakeasyMetadata()
  statusCode: number;
}
