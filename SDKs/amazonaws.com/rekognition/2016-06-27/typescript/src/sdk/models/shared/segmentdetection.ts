import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShotSegment } from "./shotsegment";
import { TechnicalCueSegment } from "./technicalcuesegment";
import { SegmentTypeEnum } from "./segmenttypeenum";



// SegmentDetection
/** 
 * A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. 
**/
export class SegmentDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationFrames" })
  durationFrames?: number;

  @SpeakeasyMetadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=DurationSMPTE" })
  durationSmpte?: string;

  @SpeakeasyMetadata({ data: "json, name=EndFrameNumber" })
  endFrameNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=EndTimecodeSMPTE" })
  endTimecodeSmpte?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTimestampMillis" })
  endTimestampMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=ShotSegment" })
  shotSegment?: ShotSegment;

  @SpeakeasyMetadata({ data: "json, name=StartFrameNumber" })
  startFrameNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=StartTimecodeSMPTE" })
  startTimecodeSmpte?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTimestampMillis" })
  startTimestampMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=TechnicalCueSegment" })
  technicalCueSegment?: TechnicalCueSegment;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: SegmentTypeEnum;
}
