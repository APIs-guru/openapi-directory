import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
**/
export declare class PendingCloudwatchLogsExports extends SpeakeasyBase {
    logTypesToDisable?: string[];
    logTypesToEnable?: string[];
}
