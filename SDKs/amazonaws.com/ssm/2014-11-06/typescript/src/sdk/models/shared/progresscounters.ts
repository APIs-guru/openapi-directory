import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProgressCounters
/** 
 * An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
**/
export class ProgressCounters extends SpeakeasyBase {
  @Metadata({ data: "json, name=CancelledSteps" })
  cancelledSteps?: number;

  @Metadata({ data: "json, name=FailedSteps" })
  failedSteps?: number;

  @Metadata({ data: "json, name=SuccessSteps" })
  successSteps?: number;

  @Metadata({ data: "json, name=TimedOutSteps" })
  timedOutSteps?: number;

  @Metadata({ data: "json, name=TotalSteps" })
  totalSteps?: number;
}
