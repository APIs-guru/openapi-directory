import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";
/**
 * This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
**/
export declare class CreateReportTask extends SpeakeasyBase {
    campaignIds?: string[];
    dateFrom?: string;
    dateTo?: string;
    dimensions?: Dimension[];
    inventoryReferences?: InventoryReference[];
    listingIds?: string[];
    marketplaceId?: string;
    metricKeys?: string[];
    reportFormat?: string;
    reportType?: string;
}
