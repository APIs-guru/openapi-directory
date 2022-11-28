import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecencyDimension } from "./recencydimension";



// SegmentBehaviors
/** 
 * Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.
**/
export class SegmentBehaviors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Recency" })
  recency?: RecencyDimension;
}
