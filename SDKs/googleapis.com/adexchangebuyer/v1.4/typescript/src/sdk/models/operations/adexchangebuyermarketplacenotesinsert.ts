import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerMarketplacenotesInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;
}


export class AdexchangebuyerMarketplacenotesInsertQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerMarketplacenotesInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerMarketplacenotesInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerMarketplacenotesInsertPathParams;

  @Metadata()
  queryParams: AdexchangebuyerMarketplacenotesInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AddOrderNotesRequest;

  @Metadata()
  security: AdexchangebuyerMarketplacenotesInsertSecurity;
}


export class AdexchangebuyerMarketplacenotesInsertResponse extends SpeakeasyBase {
  @Metadata()
  addOrderNotesResponse?: shared.AddOrderNotesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
