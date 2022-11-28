import { SpeakeasyBase } from "../../../internal/utils";
import { OrFiltersForSegment } from "./orfiltersforsegment";
/**
 * A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
**/
export declare class SimpleSegment extends SpeakeasyBase {
    orFiltersForSegment?: OrFiltersForSegment[];
}
