import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * The type that defines the fields for the order filters.
**/
export declare class OrderFilterCriteria extends SpeakeasyBase {
    creationDateRange?: DateRange;
    modifiedDateRange?: DateRange;
    orderStatus?: string;
}
