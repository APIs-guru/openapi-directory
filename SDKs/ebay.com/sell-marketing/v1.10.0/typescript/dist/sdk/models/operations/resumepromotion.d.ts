import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResumePromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class ResumePromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class ResumePromotionRequest extends SpeakeasyBase {
    pathParams: ResumePromotionPathParams;
    security: ResumePromotionSecurity;
}
export declare class ResumePromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
