import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeNotificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unread" })
  unread?: boolean;
}


export class GetUsersMeNotificationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsersMeNotificationsQueryParams;

  @SpeakeasyMetadata()
  security: GetUsersMeNotificationsSecurity;
}


export class GetUsersMeNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationListResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
