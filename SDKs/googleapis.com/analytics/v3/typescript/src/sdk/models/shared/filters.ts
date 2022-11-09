import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


// Filters
/** 
 * A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
**/
export class Filters extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Filter })
  items?: Filter[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
