import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PausePromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class PausePromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class PausePromotionRequest extends SpeakeasyBase {
    pathParams: PausePromotionPathParams;
    security: PausePromotionSecurity;
}
export declare class PausePromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
