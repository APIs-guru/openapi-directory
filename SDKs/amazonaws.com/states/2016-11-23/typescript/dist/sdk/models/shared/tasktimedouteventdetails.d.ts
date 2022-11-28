import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about a resource timeout that occurred during an execution.
**/
export declare class TaskTimedOutEventDetails extends SpeakeasyBase {
    cause?: string;
    error?: string;
    resource: string;
    resourceType: string;
}
