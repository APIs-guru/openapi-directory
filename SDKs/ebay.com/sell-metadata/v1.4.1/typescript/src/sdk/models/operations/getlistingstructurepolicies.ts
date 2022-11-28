import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingStructurePoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetListingStructurePoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetListingStructurePoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetListingStructurePoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingStructurePoliciesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingStructurePoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetListingStructurePoliciesSecurity;
}


export class GetListingStructurePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listingStructurePolicyResponse?: shared.ListingStructurePolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
