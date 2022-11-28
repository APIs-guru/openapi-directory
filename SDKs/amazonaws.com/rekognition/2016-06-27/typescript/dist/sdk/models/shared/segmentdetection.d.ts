import { SpeakeasyBase } from "../../../internal/utils";
import { ShotSegment } from "./shotsegment";
import { TechnicalCueSegment } from "./technicalcuesegment";
import { SegmentTypeEnum } from "./segmenttypeenum";
/**
 * A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>.
**/
export declare class SegmentDetection extends SpeakeasyBase {
    durationFrames?: number;
    durationMillis?: number;
    durationSmpte?: string;
    endFrameNumber?: number;
    endTimecodeSmpte?: string;
    endTimestampMillis?: number;
    shotSegment?: ShotSegment;
    startFrameNumber?: number;
    startTimecodeSmpte?: string;
    startTimestampMillis?: number;
    technicalCueSegment?: TechnicalCueSegment;
    type?: SegmentTypeEnum;
}
