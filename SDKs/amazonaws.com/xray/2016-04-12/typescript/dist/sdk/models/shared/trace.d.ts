import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
/**
 * A collection of segment documents with matching trace IDs.
**/
export declare class Trace extends SpeakeasyBase {
    duration?: number;
    id?: string;
    limitExceeded?: boolean;
    segments?: Segment[];
}
