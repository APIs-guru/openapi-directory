import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentTypeEnum } from "./segmenttypeenum";



// SegmentTypeInfo
/** 
 * Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
**/
export class SegmentTypeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: SegmentTypeEnum;
}
