import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateItemPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateItemPromotionRequest extends SpeakeasyBase {
    request?: shared.ItemPromotion;
    security: CreateItemPromotionSecurity;
}
export declare class CreateItemPromotionResponse extends SpeakeasyBase {
    baseResponse?: shared.BaseResponse;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
