import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";
import { DateRange } from "./daterange";


// InventoryFilterCriteria
/** 
 * The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can set date range filters and/or can retrieve orders in a specific state.
**/
export class InventoryFilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateRange" })
  creationDateRange?: DateRange;

  @Metadata({ data: "json, name=listingFormat" })
  listingFormat?: string;

  @Metadata({ data: "json, name=listingStatus" })
  listingStatus?: string;

  @Metadata({ data: "json, name=modifiedDateRange" })
  modifiedDateRange?: DateRange;
}
