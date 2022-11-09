import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartShotDetectionFilter
/** 
 * Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>.
**/
export class StartShotDetectionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=MinSegmentConfidence" })
  minSegmentConfidence?: number;
}
