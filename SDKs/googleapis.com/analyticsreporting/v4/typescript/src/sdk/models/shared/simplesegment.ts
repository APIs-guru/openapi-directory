import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrFiltersForSegment } from "./orfiltersforsegment";



// SimpleSegment
/** 
 * A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
**/
export class SimpleSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orFiltersForSegment", elemType: OrFiltersForSegment })
  orFiltersForSegment?: OrFiltersForSegment[];
}
