import { SpeakeasyBase } from "../../../internal/utils";
import { TaskExecution } from "./taskexecution";
/**
 * Status event
**/
export declare class StatusEvent extends SpeakeasyBase {
    description?: string;
    eventTime?: string;
    taskExecution?: TaskExecution;
    type?: string;
}
