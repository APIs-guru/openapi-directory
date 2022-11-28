import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentResponse } from "./segmentresponse";
/**
 * Provides information about all the segments that are associated with an application.
**/
export declare class SegmentsResponse extends SpeakeasyBase {
    item: SegmentResponse[];
    nextToken?: string;
}
