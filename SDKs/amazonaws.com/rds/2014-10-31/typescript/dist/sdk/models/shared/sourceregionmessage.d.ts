import { SpeakeasyBase } from "../../../internal/utils";
import { SourceRegion } from "./sourceregion";
/**
 * Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
**/
export declare class SourceRegionMessage extends SpeakeasyBase {
    marker?: string;
    sourceRegions?: SourceRegion[];
}
