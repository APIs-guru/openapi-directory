import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReturnPolicyByNameQueryParams extends SpeakeasyBase {
    marketplaceId: string;
    name: string;
}
export declare class GetReturnPolicyByNameSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReturnPolicyByNameRequest extends SpeakeasyBase {
    queryParams: GetReturnPolicyByNameQueryParams;
    security: GetReturnPolicyByNameSecurity;
}
export declare class GetReturnPolicyByNameResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicy?: shared.ReturnPolicy;
    statusCode: number;
}
