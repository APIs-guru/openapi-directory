import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";
/**
 * Describes the updates to the starting parameters for a Kinesis Data Analytics application.
**/
export declare class RunConfigurationUpdate extends SpeakeasyBase {
    applicationRestoreConfiguration?: ApplicationRestoreConfiguration;
    flinkRunConfiguration?: FlinkRunConfiguration;
}
