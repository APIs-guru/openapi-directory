import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingViolationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=compliance_type" })
  complianceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=listing_id" })
  listingId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetListingViolationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetListingViolationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetListingViolationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListingViolationsQueryParams;

  @Metadata()
  headers: GetListingViolationsHeaders;

  @Metadata()
  security: GetListingViolationsSecurity;
}


export class GetListingViolationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedComplianceViolationCollection?: shared.PagedComplianceViolationCollection;

  @Metadata()
  statusCode: number;
}
