import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CanaryRunTimeline
/** 
 * This structure contains the start and end times of a single canary run.
**/
export class CanaryRunTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=Completed" })
  completed?: Date;

  @Metadata({ data: "json, name=Started" })
  started?: Date;
}
