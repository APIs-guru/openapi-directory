import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPromotionsQueryParams extends SpeakeasyBase {
    limit?: string;
    marketplaceId: string;
    offset?: string;
    promotionStatus?: string;
    promotionType?: string;
    q?: string;
    sort?: string;
}
export declare class GetPromotionsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPromotionsRequest extends SpeakeasyBase {
    queryParams: GetPromotionsQueryParams;
    security: GetPromotionsSecurity;
}
export declare class GetPromotionsResponse extends SpeakeasyBase {
    contentType: string;
    promotionsPagedCollection?: shared.PromotionsPagedCollection;
    statusCode: number;
}
