import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about a task scheduled during an execution.
**/
export declare class TaskScheduledEventDetails extends SpeakeasyBase {
    heartbeatInSeconds?: number;
    parameters: string;
    region: string;
    resource: string;
    resourceType: string;
    timeoutInSeconds?: number;
}
