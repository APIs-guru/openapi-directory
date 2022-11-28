import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProgressCounters
/** 
 * An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
**/
export class ProgressCounters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CancelledSteps" })
  cancelledSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=FailedSteps" })
  failedSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=SuccessSteps" })
  successSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=TimedOutSteps" })
  timedOutSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalSteps" })
  totalSteps?: number;
}
