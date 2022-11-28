import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
    request?: shared.ItemPriceMarkdown;
    security: CreateItemPriceMarkdownPromotionSecurity;
}
export declare class CreateItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    createItemPriceMarkdownPromotion201ApplicationJsonObject?: Map<string, any>;
}
