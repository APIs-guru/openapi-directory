import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCharityOrgsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=registration_ids" })
  registrationIds?: string;
}


export class GetCharityOrgsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetCharityOrgsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCharityOrgsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCharityOrgsQueryParams;

  @Metadata()
  headers: GetCharityOrgsHeaders;

  @Metadata()
  security: GetCharityOrgsSecurity;
}


export class GetCharityOrgsResponse extends SpeakeasyBase {
  @Metadata()
  charitySearchResponse?: shared.CharitySearchResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
