import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=privateAuctionId" })
  privateAuctionId: string;
}


export class AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams;

  @Metadata()
  queryParams: AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdatePrivateAuctionProposalRequest;

  @Metadata()
  security: AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity;
}


export class AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
