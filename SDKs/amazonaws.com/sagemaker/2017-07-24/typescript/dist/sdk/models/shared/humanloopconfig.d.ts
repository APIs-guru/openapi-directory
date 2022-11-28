import { SpeakeasyBase } from "../../../internal/utils";
import { PublicWorkforceTaskPrice } from "./publicworkforcetaskprice";
/**
 * Describes the work to be performed by human workers.
**/
export declare class HumanLoopConfig extends SpeakeasyBase {
    humanTaskUiArn: string;
    publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
    taskAvailabilityLifetimeInSeconds?: number;
    taskCount: number;
    taskDescription: string;
    taskKeywords?: string[];
    taskTimeLimitInSeconds?: number;
    taskTitle: string;
    workteamArn: string;
}
