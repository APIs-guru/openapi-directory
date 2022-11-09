import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerMarketplacedealsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;
}


export class AdexchangebuyerMarketplacedealsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pqlQuery" })
  pqlQuery?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerMarketplacedealsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerMarketplacedealsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerMarketplacedealsListPathParams;

  @Metadata()
  queryParams: AdexchangebuyerMarketplacedealsListQueryParams;

  @Metadata()
  security: AdexchangebuyerMarketplacedealsListSecurity;
}


export class AdexchangebuyerMarketplacedealsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOrderDealsResponse?: shared.GetOrderDealsResponse;

  @Metadata()
  statusCode: number;
}
