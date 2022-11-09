import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";


// SummaryReportResponse
/** 
 * This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see Reading item promotion Summary reports.
**/
export class SummaryReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseSale" })
  baseSale?: Amount;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=percentageSalesLift" })
  percentageSalesLift?: string;

  @Metadata({ data: "json, name=promotionSale" })
  promotionSale?: Amount;

  @Metadata({ data: "json, name=totalSale" })
  totalSale?: Amount;
}
