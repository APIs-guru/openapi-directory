import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionOfInterest } from "./regionofinterest";
import { DetectionFilter } from "./detectionfilter";



// StartTextDetectionFilters
/** 
 * Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.
**/
export class StartTextDetectionFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionsOfInterest", elemType: RegionOfInterest })
  regionsOfInterest?: RegionOfInterest[];

  @SpeakeasyMetadata({ data: "json, name=WordFilter" })
  wordFilter?: DetectionFilter;
}
