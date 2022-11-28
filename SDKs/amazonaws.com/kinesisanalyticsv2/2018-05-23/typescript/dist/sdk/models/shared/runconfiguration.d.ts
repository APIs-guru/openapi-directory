import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";
import { SqlRunConfiguration } from "./sqlrunconfiguration";
/**
 * Describes the starting parameters for an Kinesis Data Analytics application.
**/
export declare class RunConfiguration extends SpeakeasyBase {
    applicationRestoreConfiguration?: ApplicationRestoreConfiguration;
    flinkRunConfiguration?: FlinkRunConfiguration;
    sqlRunConfigurations?: SqlRunConfiguration[];
}
