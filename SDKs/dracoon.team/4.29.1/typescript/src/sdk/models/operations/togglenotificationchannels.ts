import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ToggleNotificationChannelsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ToggleNotificationChannelsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ToggleNotificationChannelsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NotificationChannelActivationRequest;
}


export class ToggleNotificationChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  notificationChannelList?: shared.NotificationChannelList;

  @Metadata()
  statusCode: number;
}
