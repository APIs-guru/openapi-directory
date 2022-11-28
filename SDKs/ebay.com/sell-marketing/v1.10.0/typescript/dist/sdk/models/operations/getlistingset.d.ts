import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingSetPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class GetListingSetQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
    q?: string;
    sort?: string;
    status?: string;
}
export declare class GetListingSetSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetListingSetRequest extends SpeakeasyBase {
    pathParams: GetListingSetPathParams;
    queryParams: GetListingSetQueryParams;
    security: GetListingSetSecurity;
}
export declare class GetListingSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
