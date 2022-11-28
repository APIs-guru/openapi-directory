import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about a task that failed to submit during an execution.
**/
export declare class TaskSubmitFailedEventDetails extends SpeakeasyBase {
    cause?: string;
    error?: string;
    resource: string;
    resourceType: string;
}
