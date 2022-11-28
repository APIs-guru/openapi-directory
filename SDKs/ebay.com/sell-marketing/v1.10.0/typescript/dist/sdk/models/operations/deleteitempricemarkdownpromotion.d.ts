import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class DeleteItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
    pathParams: DeleteItemPriceMarkdownPromotionPathParams;
    security: DeleteItemPriceMarkdownPromotionSecurity;
}
export declare class DeleteItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
