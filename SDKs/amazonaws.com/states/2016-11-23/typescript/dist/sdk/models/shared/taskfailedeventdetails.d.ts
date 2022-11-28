import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about a task failure event.
**/
export declare class TaskFailedEventDetails extends SpeakeasyBase {
    cause?: string;
    error?: string;
    resource: string;
    resourceType: string;
}
