import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetUsersMeSubscriptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersMeSubscriptionsQueryParams;

  @Metadata()
  security: GetUsersMeSubscriptionsSecurity;
}


export class GetUsersMeSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoChannelList?: any;
}
