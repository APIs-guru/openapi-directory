import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PromotionReportDetail } from "./promotionreportdetail";


// PromotionsReportPagedCollection
/** 
 * This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
**/
export class PromotionsReportPagedCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=promotionReports", elemType: shared.PromotionReportDetail })
  promotionReports?: PromotionReportDetail[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
