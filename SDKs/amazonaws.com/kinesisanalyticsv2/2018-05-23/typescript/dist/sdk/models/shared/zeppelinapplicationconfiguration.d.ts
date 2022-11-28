import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogConfiguration } from "./catalogconfiguration";
import { CustomArtifactConfiguration } from "./customartifactconfiguration";
import { DeployAsApplicationConfiguration } from "./deployasapplicationconfiguration";
import { ZeppelinMonitoringConfiguration } from "./zeppelinmonitoringconfiguration";
/**
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
export declare class ZeppelinApplicationConfiguration extends SpeakeasyBase {
    catalogConfiguration?: CatalogConfiguration;
    customArtifactsConfiguration?: CustomArtifactConfiguration[];
    deployAsApplicationConfiguration?: DeployAsApplicationConfiguration;
    monitoringConfiguration?: ZeppelinMonitoringConfiguration;
}
