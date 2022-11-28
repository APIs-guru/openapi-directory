import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemPriceMarkdownPromotionPathParams extends SpeakeasyBase {
    promotionId: string;
}
export declare class GetItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
    pathParams: GetItemPriceMarkdownPromotionPathParams;
    security: GetItemPriceMarkdownPromotionSecurity;
}
export declare class GetItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
    contentType: string;
    itemPriceMarkdown?: shared.ItemPriceMarkdown;
    statusCode: number;
}
