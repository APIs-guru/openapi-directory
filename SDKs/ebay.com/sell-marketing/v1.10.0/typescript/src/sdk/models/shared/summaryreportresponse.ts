import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// SummaryReportResponse
/** 
 * This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see Reading item promotion Summary reports.
**/
export class SummaryReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseSale" })
  baseSale?: Amount;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=percentageSalesLift" })
  percentageSalesLift?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionSale" })
  promotionSale?: Amount;

  @SpeakeasyMetadata({ data: "json, name=totalSale" })
  totalSale?: Amount;
}
