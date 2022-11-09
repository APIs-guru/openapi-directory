import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CatalogConfigurationDescription } from "./catalogconfigurationdescription";
import { CustomArtifactConfigurationDescription } from "./customartifactconfigurationdescription";
import { DeployAsApplicationConfigurationDescription } from "./deployasapplicationconfigurationdescription";
import { ZeppelinMonitoringConfigurationDescription } from "./zeppelinmonitoringconfigurationdescription";
/**
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
export declare class ZeppelinApplicationConfigurationDescription extends SpeakeasyBase {
    catalogConfigurationDescription?: CatalogConfigurationDescription;
    customArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[];
    deployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;
    monitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription;
}
