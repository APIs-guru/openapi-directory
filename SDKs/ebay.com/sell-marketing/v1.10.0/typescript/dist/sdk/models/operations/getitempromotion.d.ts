import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemPromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class GetItemPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetItemPromotionRequest extends SpeakeasyBase {
    pathParams: GetItemPromotionPathParams;
    security: GetItemPromotionSecurity;
}
export declare class GetItemPromotionResponse extends SpeakeasyBase {
    contentType: string;
    itemPromotionResponse?: shared.ItemPromotionResponse;
    statusCode: number;
}
