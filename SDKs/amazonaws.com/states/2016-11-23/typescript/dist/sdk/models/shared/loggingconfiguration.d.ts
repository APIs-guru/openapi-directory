import { SpeakeasyBase } from "../../../internal/utils";
import { LogDestination } from "./logdestination";
import { LogLevelEnum } from "./loglevelenum";
/**
 * The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
**/
export declare class LoggingConfiguration extends SpeakeasyBase {
    destinations?: LogDestination[];
    includeExecutionData?: boolean;
    level?: LogLevelEnum;
}
