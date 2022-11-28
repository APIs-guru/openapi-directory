import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimingsModelGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done_time" })
  doneTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=feedback_time" })
  feedbackTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=processing_period" })
  processingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=receive_time" })
  receiveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;
}
