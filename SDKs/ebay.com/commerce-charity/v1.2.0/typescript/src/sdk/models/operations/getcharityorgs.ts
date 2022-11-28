import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCharityOrgsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=registration_ids" })
  registrationIds?: string;
}


export class GetCharityOrgsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetCharityOrgsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCharityOrgsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCharityOrgsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCharityOrgsHeaders;

  @SpeakeasyMetadata()
  security: GetCharityOrgsSecurity;
}


export class GetCharityOrgsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  charitySearchResponse?: shared.CharitySearchResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
