import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionOfInterest } from "./regionofinterest";
import { DetectionFilter } from "./detectionfilter";


// DetectTextFilters
/** 
 * A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in. 
**/
export class DetectTextFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionsOfInterest", elemType: shared.RegionOfInterest })
  regionsOfInterest?: RegionOfInterest[];

  @Metadata({ data: "json, name=WordFilter" })
  wordFilter?: DetectionFilter;
}
