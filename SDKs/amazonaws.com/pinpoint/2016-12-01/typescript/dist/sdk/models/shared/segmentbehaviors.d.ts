import { SpeakeasyBase } from "../../../internal/utils";
import { RecencyDimension } from "./recencydimension";
/**
 * Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.
**/
export declare class SegmentBehaviors extends SpeakeasyBase {
    recency?: RecencyDimension;
}
