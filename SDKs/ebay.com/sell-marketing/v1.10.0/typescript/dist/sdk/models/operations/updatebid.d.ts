import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBidPathParams extends SpeakeasyBase {
    adId: string;
    campaignId: string;
}
export declare class UpdateBidSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateBidRequest extends SpeakeasyBase {
    pathParams: UpdateBidPathParams;
    request: shared.UpdateBidPercentageRequest;
    security: UpdateBidSecurity;
}
export declare class UpdateBidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
