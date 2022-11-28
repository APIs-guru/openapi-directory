import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class UpdateItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
    pathParams: UpdateItemPriceMarkdownPromotionPathParams;
    request?: shared.ItemPriceMarkdown;
    security: UpdateItemPriceMarkdownPromotionSecurity;
}
export declare class UpdateItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateItemPriceMarkdownPromotion200ApplicationJsonObject?: Map<string, any>;
}
