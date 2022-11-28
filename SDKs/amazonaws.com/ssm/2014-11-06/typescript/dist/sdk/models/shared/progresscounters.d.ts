import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
**/
export declare class ProgressCounters extends SpeakeasyBase {
    cancelledSteps?: number;
    failedSteps?: number;
    successSteps?: number;
    timedOutSteps?: number;
    totalSteps?: number;
}
