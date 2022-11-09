import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Segment } from "./segment";


// Segments
/** 
 * An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.
**/
export class Segments extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Segment })
  items?: Segment[];

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
