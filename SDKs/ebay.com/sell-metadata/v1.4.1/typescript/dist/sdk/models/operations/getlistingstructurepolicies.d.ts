import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingStructurePoliciesPathParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetListingStructurePoliciesQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetListingStructurePoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetListingStructurePoliciesRequest extends SpeakeasyBase {
    pathParams: GetListingStructurePoliciesPathParams;
    queryParams: GetListingStructurePoliciesQueryParams;
    security: GetListingStructurePoliciesSecurity;
}
export declare class GetListingStructurePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    listingStructurePolicyResponse?: shared.ListingStructurePolicyResponse;
    statusCode: number;
}
