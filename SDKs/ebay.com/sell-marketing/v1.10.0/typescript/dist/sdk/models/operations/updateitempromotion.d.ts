import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateItemPromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class UpdateItemPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateItemPromotionRequest extends SpeakeasyBase {
    pathParams: UpdateItemPromotionPathParams;
    request?: shared.ItemPromotion;
    security: UpdateItemPromotionSecurity;
}
export declare class UpdateItemPromotionResponse extends SpeakeasyBase {
    baseResponse?: shared.BaseResponse;
    contentType: string;
    statusCode: number;
}
