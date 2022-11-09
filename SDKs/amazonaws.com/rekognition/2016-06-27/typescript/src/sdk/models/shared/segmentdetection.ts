import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShotSegment } from "./shotsegment";
import { TechnicalCueSegment } from "./technicalcuesegment";
import { SegmentTypeEnum } from "./segmenttypeenum";


// SegmentDetection
/** 
 * A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. 
**/
export class SegmentDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationFrames" })
  durationFrames?: number;

  @Metadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @Metadata({ data: "json, name=DurationSMPTE" })
  durationSmpte?: string;

  @Metadata({ data: "json, name=EndFrameNumber" })
  endFrameNumber?: number;

  @Metadata({ data: "json, name=EndTimecodeSMPTE" })
  endTimecodeSmpte?: string;

  @Metadata({ data: "json, name=EndTimestampMillis" })
  endTimestampMillis?: number;

  @Metadata({ data: "json, name=ShotSegment" })
  shotSegment?: ShotSegment;

  @Metadata({ data: "json, name=StartFrameNumber" })
  startFrameNumber?: number;

  @Metadata({ data: "json, name=StartTimecodeSMPTE" })
  startTimecodeSmpte?: string;

  @Metadata({ data: "json, name=StartTimestampMillis" })
  startTimestampMillis?: number;

  @Metadata({ data: "json, name=TechnicalCueSegment" })
  technicalCueSegment?: TechnicalCueSegment;

  @Metadata({ data: "json, name=Type" })
  type?: SegmentTypeEnum;
}
