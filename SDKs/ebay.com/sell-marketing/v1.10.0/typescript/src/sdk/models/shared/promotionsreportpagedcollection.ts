import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PromotionReportDetail } from "./promotionreportdetail";



// PromotionsReportPagedCollection
/** 
 * This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
**/
export class PromotionsReportPagedCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionReports", elemType: PromotionReportDetail })
  promotionReports?: PromotionReportDetail[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
