import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayoutPathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare class GetPayoutSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPayoutRequest extends SpeakeasyBase {
    pathParams: GetPayoutPathParams;
    security: GetPayoutSecurity;
}
export declare class GetPayoutResponse extends SpeakeasyBase {
    contentType: string;
    payout?: shared.Payout;
    statusCode: number;
}
