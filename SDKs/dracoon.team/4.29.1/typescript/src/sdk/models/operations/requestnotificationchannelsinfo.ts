import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestNotificationChannelsInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestNotificationChannelsInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestNotificationChannelsInfoHeaders;
}


export class RequestNotificationChannelsInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  notificationChannelList?: shared.NotificationChannelList;

  @SpeakeasyMetadata()
  statusCode: number;
}
