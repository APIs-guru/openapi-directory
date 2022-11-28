import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayoutsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: string;
    offset?: string;
    sort?: string;
}
export declare class GetPayoutsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPayoutsRequest extends SpeakeasyBase {
    queryParams: GetPayoutsQueryParams;
    security: GetPayoutsSecurity;
}
export declare class GetPayoutsResponse extends SpeakeasyBase {
    contentType: string;
    payouts?: shared.Payouts;
    statusCode: number;
}
