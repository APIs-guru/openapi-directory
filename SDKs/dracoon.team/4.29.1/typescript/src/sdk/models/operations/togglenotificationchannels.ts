import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ToggleNotificationChannelsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ToggleNotificationChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ToggleNotificationChannelsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NotificationChannelActivationRequest;
}


export class ToggleNotificationChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  notificationChannelList?: shared.NotificationChannelList;

  @SpeakeasyMetadata()
  statusCode: number;
}
