import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CanaryRunTimeline
/** 
 * This structure contains the start and end times of a single canary run.
**/
export class CanaryRunTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Completed" })
  completed?: Date;

  @SpeakeasyMetadata({ data: "json, name=Started" })
  started?: Date;
}
