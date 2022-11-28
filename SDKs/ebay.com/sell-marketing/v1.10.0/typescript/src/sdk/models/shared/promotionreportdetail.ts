import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// PromotionReportDetail
/** 
 * This type defines the fields in a promotion-level report.
**/
export class PromotionReportDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageItemDiscount" })
  averageItemDiscount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=averageItemRevenue" })
  averageItemRevenue?: Amount;

  @SpeakeasyMetadata({ data: "json, name=averageOrderDiscount" })
  averageOrderDiscount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=averageOrderRevenue" })
  averageOrderRevenue?: Amount;

  @SpeakeasyMetadata({ data: "json, name=averageOrderSize" })
  averageOrderSize?: string;

  @SpeakeasyMetadata({ data: "json, name=baseSale" })
  baseSale?: Amount;

  @SpeakeasyMetadata({ data: "json, name=itemsSoldQuantity" })
  itemsSoldQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfOrdersSold" })
  numberOfOrdersSold?: number;

  @SpeakeasyMetadata({ data: "json, name=percentageSalesLift" })
  percentageSalesLift?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionHref" })
  promotionHref?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionId" })
  promotionId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionReportId" })
  promotionReportId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionSale" })
  promotionSale?: Amount;

  @SpeakeasyMetadata({ data: "json, name=promotionType" })
  promotionType?: string;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=totalSale" })
  totalSale?: Amount;
}
