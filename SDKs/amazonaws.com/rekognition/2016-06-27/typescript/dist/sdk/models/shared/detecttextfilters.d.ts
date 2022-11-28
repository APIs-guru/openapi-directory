import { SpeakeasyBase } from "../../../internal/utils";
import { RegionOfInterest } from "./regionofinterest";
import { DetectionFilter } from "./detectionfilter";
/**
 * A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in.
**/
export declare class DetectTextFilters extends SpeakeasyBase {
    regionsOfInterest?: RegionOfInterest[];
    wordFilter?: DetectionFilter;
}
