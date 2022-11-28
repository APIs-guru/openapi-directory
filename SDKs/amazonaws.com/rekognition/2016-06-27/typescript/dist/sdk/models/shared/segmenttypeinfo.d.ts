import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentTypeEnum } from "./segmenttypeenum";
/**
 * Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
**/
export declare class SegmentTypeInfo extends SpeakeasyBase {
    modelVersion?: string;
    type?: SegmentTypeEnum;
}
