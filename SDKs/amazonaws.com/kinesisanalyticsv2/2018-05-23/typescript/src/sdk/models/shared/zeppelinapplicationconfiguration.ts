import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogConfiguration } from "./catalogconfiguration";
import { CustomArtifactConfiguration } from "./customartifactconfiguration";
import { DeployAsApplicationConfiguration } from "./deployasapplicationconfiguration";
import { ZeppelinMonitoringConfiguration } from "./zeppelinmonitoringconfiguration";



// ZeppelinApplicationConfiguration
/** 
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinApplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogConfiguration" })
  catalogConfiguration?: CatalogConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CustomArtifactsConfiguration", elemType: CustomArtifactConfiguration })
  customArtifactsConfiguration?: CustomArtifactConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=DeployAsApplicationConfiguration" })
  deployAsApplicationConfiguration?: DeployAsApplicationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=MonitoringConfiguration" })
  monitoringConfiguration?: ZeppelinMonitoringConfiguration;
}
