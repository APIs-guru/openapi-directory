import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingStructurePoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetListingStructurePoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetListingStructurePoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetListingStructurePoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingStructurePoliciesPathParams;

  @Metadata()
  queryParams: GetListingStructurePoliciesQueryParams;

  @Metadata()
  security: GetListingStructurePoliciesSecurity;
}


export class GetListingStructurePoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listingStructurePolicyResponse?: shared.ListingStructurePolicyResponse;

  @Metadata()
  statusCode: number;
}
