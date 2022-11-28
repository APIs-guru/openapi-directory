import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";
/**
 * Describes the starting properties for a Kinesis Data Analytics application.
**/
export declare class RunConfigurationDescription extends SpeakeasyBase {
    applicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;
    flinkRunConfigurationDescription?: FlinkRunConfiguration;
}
