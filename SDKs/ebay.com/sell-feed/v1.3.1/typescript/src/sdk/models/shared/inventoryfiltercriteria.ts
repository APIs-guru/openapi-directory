import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";



// InventoryFilterCriteria
/** 
 * The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can set date range filters and/or can retrieve orders in a specific state.
**/
export class InventoryFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateRange" })
  creationDateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=listingFormat" })
  listingFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=listingStatus" })
  listingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDateRange" })
  modifiedDateRange?: DateRange;
}
