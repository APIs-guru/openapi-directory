import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";



// Segments
/** 
 * An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.
**/
export class Segments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Segment })
  items?: Segment[];

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
