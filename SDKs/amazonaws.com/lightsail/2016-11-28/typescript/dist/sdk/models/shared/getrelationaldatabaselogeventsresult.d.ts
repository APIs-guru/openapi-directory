import { SpeakeasyBase } from "../../../internal/utils";
import { LogEvent } from "./logevent";
export declare class GetRelationalDatabaseLogEventsResult extends SpeakeasyBase {
    nextBackwardToken?: string;
    nextForwardToken?: string;
    resourceLogEvents?: LogEvent[];
}
