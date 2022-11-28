import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// Filters
/** 
 * A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
**/
export class Filters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Filter })
  items?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
