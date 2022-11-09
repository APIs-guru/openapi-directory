import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationCodeConfigurationDescription } from "./applicationcodeconfigurationdescription";
import { ApplicationSnapshotConfigurationDescription } from "./applicationsnapshotconfigurationdescription";
import { EnvironmentPropertyDescriptions } from "./environmentpropertydescriptions";
import { FlinkApplicationConfigurationDescription } from "./flinkapplicationconfigurationdescription";
import { RunConfigurationDescription } from "./runconfigurationdescription";
import { SqlApplicationConfigurationDescription } from "./sqlapplicationconfigurationdescription";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
import { ZeppelinApplicationConfigurationDescription } from "./zeppelinapplicationconfigurationdescription";
/**
 * Describes details about the application code and starting parameters for a Kinesis Data Analytics application.
**/
export declare class ApplicationConfigurationDescription extends SpeakeasyBase {
    applicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;
    applicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;
    environmentPropertyDescriptions?: EnvironmentPropertyDescriptions;
    flinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;
    runConfigurationDescription?: RunConfigurationDescription;
    sqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;
    vpcConfigurationDescriptions?: VpcConfigurationDescription[];
    zeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
}
