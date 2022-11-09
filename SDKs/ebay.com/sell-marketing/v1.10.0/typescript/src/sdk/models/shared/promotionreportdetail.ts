import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";


// PromotionReportDetail
/** 
 * This type defines the fields in a promotion-level report.
**/
export class PromotionReportDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageItemDiscount" })
  averageItemDiscount?: Amount;

  @Metadata({ data: "json, name=averageItemRevenue" })
  averageItemRevenue?: Amount;

  @Metadata({ data: "json, name=averageOrderDiscount" })
  averageOrderDiscount?: Amount;

  @Metadata({ data: "json, name=averageOrderRevenue" })
  averageOrderRevenue?: Amount;

  @Metadata({ data: "json, name=averageOrderSize" })
  averageOrderSize?: string;

  @Metadata({ data: "json, name=baseSale" })
  baseSale?: Amount;

  @Metadata({ data: "json, name=itemsSoldQuantity" })
  itemsSoldQuantity?: number;

  @Metadata({ data: "json, name=numberOfOrdersSold" })
  numberOfOrdersSold?: number;

  @Metadata({ data: "json, name=percentageSalesLift" })
  percentageSalesLift?: string;

  @Metadata({ data: "json, name=promotionHref" })
  promotionHref?: string;

  @Metadata({ data: "json, name=promotionId" })
  promotionId?: string;

  @Metadata({ data: "json, name=promotionReportId" })
  promotionReportId?: string;

  @Metadata({ data: "json, name=promotionSale" })
  promotionSale?: Amount;

  @Metadata({ data: "json, name=promotionType" })
  promotionType?: string;

  @Metadata({ data: "json, name=totalDiscount" })
  totalDiscount?: Amount;

  @Metadata({ data: "json, name=totalSale" })
  totalSale?: Amount;
}
