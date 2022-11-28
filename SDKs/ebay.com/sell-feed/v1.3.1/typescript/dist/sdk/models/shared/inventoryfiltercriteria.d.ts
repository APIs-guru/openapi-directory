import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can set date range filters and/or can retrieve orders in a specific state.
**/
export declare class InventoryFilterCriteria extends SpeakeasyBase {
    creationDateRange?: DateRange;
    listingFormat?: string;
    listingStatus?: string;
    modifiedDateRange?: DateRange;
}
