import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentTypeEnum } from "./segmenttypeenum";


// SegmentTypeInfo
/** 
 * Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
**/
export class SegmentTypeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=Type" })
  type?: SegmentTypeEnum;
}
