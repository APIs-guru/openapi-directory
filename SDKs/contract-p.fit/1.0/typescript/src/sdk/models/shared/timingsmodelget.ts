import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimingsModelGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=done_time" })
  doneTime?: Date;

  @Metadata({ data: "json, name=feedback_time" })
  feedbackTime?: Date;

  @Metadata({ data: "json, name=processing_period" })
  processingPeriod?: number;

  @Metadata({ data: "json, name=receive_time" })
  receiveTime?: Date;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;
}
