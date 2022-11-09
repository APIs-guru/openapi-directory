import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrFiltersForSegment } from "./orfiltersforsegment";


// SimpleSegment
/** 
 * A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
**/
export class SimpleSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=orFiltersForSegment", elemType: shared.OrFiltersForSegment })
  orFiltersForSegment?: OrFiltersForSegment[];
}
