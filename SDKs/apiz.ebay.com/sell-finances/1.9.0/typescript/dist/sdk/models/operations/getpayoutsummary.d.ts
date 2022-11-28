import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayoutSummaryQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetPayoutSummarySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPayoutSummaryRequest extends SpeakeasyBase {
    queryParams: GetPayoutSummaryQueryParams;
    security: GetPayoutSummarySecurity;
}
export declare class GetPayoutSummaryResponse extends SpeakeasyBase {
    contentType: string;
    payoutSummaryResponse?: shared.PayoutSummaryResponse;
    statusCode: number;
}
