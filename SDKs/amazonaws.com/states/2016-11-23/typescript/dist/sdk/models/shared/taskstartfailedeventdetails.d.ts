import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about a task that failed to start during an execution.
**/
export declare class TaskStartFailedEventDetails extends SpeakeasyBase {
    cause?: string;
    error?: string;
    resource: string;
    resourceType: string;
}
