import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemPromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class DeleteItemPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteItemPromotionRequest extends SpeakeasyBase {
    pathParams: DeleteItemPromotionPathParams;
    security: DeleteItemPromotionSecurity;
}
export declare class DeleteItemPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
