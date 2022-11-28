import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";
/**
 * This type defines the fields in a report task.
**/
export declare class ReportTask extends SpeakeasyBase {
    campaignIds?: string[];
    dateFrom?: string;
    dateTo?: string;
    dimensions?: Dimension[];
    inventoryReferences?: InventoryReference[];
    listingIds?: string[];
    marketplaceId?: string;
    metricKeys?: string[];
    reportExpirationDate?: string;
    reportFormat?: string;
    reportHref?: string;
    reportId?: string;
    reportName?: string;
    reportTaskCompletionDate?: string;
    reportTaskCreationDate?: string;
    reportTaskExpectedCompletionDate?: string;
    reportTaskId?: string;
    reportTaskStatus?: string;
    reportTaskStatusMessage?: string;
    reportType?: string;
}
