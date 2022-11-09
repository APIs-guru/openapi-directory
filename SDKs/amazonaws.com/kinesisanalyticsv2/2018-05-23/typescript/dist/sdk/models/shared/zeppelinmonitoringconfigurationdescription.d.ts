import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";
/**
 * The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
**/
export declare class ZeppelinMonitoringConfigurationDescription extends SpeakeasyBase {
    logLevel?: LogLevelEnum;
}
