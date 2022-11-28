import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartShotDetectionFilter
/** 
 * Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>.
**/
export class StartShotDetectionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MinSegmentConfidence" })
  minSegmentConfidence?: number;
}
