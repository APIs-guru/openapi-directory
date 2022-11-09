import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeNotificationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unread" })
  unread?: boolean;
}


export class GetUsersMeNotificationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersMeNotificationsQueryParams;

  @Metadata()
  security: GetUsersMeNotificationsSecurity;
}


export class GetUsersMeNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notificationListResponse?: any;

  @Metadata()
  statusCode: number;
}
