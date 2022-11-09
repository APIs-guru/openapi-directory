import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerMarketplacedealsInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;
}


export class AdexchangebuyerMarketplacedealsInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerMarketplacedealsInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerMarketplacedealsInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerMarketplacedealsInsertPathParams;

  @Metadata()
  queryParams: AdexchangebuyerMarketplacedealsInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AddOrderDealsRequest;

  @Metadata()
  security: AdexchangebuyerMarketplacedealsInsertSecurity;
}


export class AdexchangebuyerMarketplacedealsInsertResponse extends SpeakeasyBase {
  @Metadata()
  addOrderDealsResponse?: shared.AddOrderDealsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
