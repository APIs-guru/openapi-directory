import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CatalogConfigurationUpdate } from "./catalogconfigurationupdate";
import { CustomArtifactConfiguration } from "./customartifactconfiguration";
import { DeployAsApplicationConfigurationUpdate } from "./deployasapplicationconfigurationupdate";
import { ZeppelinMonitoringConfigurationUpdate } from "./zeppelinmonitoringconfigurationupdate";
/**
 * Updates to the configuration of Kinesis Data Analytics Studio notebook.
**/
export declare class ZeppelinApplicationConfigurationUpdate extends SpeakeasyBase {
    catalogConfigurationUpdate?: CatalogConfigurationUpdate;
    customArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];
    deployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;
    monitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;
}
