import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see Reading item promotion Summary reports.
**/
export declare class SummaryReportResponse extends SpeakeasyBase {
    baseSale?: Amount;
    lastUpdated?: string;
    percentageSalesLift?: string;
    promotionSale?: Amount;
    totalSale?: Amount;
}
