import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSellerFundsSummarySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetSellerFundsSummaryRequest extends SpeakeasyBase {
    security: GetSellerFundsSummarySecurity;
}
export declare class GetSellerFundsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    sellerFundsSummaryResponse?: shared.SellerFundsSummaryResponse;
    statusCode: number;
}
