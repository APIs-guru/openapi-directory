import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type defines the fields in a promotion-level report.
**/
export declare class PromotionReportDetail extends SpeakeasyBase {
    averageItemDiscount?: Amount;
    averageItemRevenue?: Amount;
    averageOrderDiscount?: Amount;
    averageOrderRevenue?: Amount;
    averageOrderSize?: string;
    baseSale?: Amount;
    itemsSoldQuantity?: number;
    numberOfOrdersSold?: number;
    percentageSalesLift?: string;
    promotionHref?: string;
    promotionId?: string;
    promotionReportId?: string;
    promotionSale?: Amount;
    promotionType?: string;
    totalDiscount?: Amount;
    totalSale?: Amount;
}
