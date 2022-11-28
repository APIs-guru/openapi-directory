import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationCodeConfigurationUpdate } from "./applicationcodeconfigurationupdate";
import { ApplicationSnapshotConfigurationUpdate } from "./applicationsnapshotconfigurationupdate";
import { EnvironmentPropertyUpdates } from "./environmentpropertyupdates";
import { FlinkApplicationConfigurationUpdate } from "./flinkapplicationconfigurationupdate";
import { SqlApplicationConfigurationUpdate } from "./sqlapplicationconfigurationupdate";
import { VpcConfigurationUpdate } from "./vpcconfigurationupdate";
import { ZeppelinApplicationConfigurationUpdate } from "./zeppelinapplicationconfigurationupdate";
/**
 * Describes updates to an application's configuration.
**/
export declare class ApplicationConfigurationUpdate extends SpeakeasyBase {
    applicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;
    applicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;
    environmentPropertyUpdates?: EnvironmentPropertyUpdates;
    flinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;
    sqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;
    vpcConfigurationUpdates?: VpcConfigurationUpdate[];
    zeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
}
