import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFulfillmentPolicyByNameQueryParams extends SpeakeasyBase {
    marketplaceId: string;
    name: string;
}
export declare class GetFulfillmentPolicyByNameSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetFulfillmentPolicyByNameRequest extends SpeakeasyBase {
    queryParams: GetFulfillmentPolicyByNameQueryParams;
    security: GetFulfillmentPolicyByNameSecurity;
}
export declare class GetFulfillmentPolicyByNameResponse extends SpeakeasyBase {
    contentType: string;
    fulfillmentPolicy?: shared.FulfillmentPolicy;
    statusCode: number;
}
