import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogConfigurationUpdate } from "./catalogconfigurationupdate";
import { CustomArtifactConfiguration } from "./customartifactconfiguration";
import { DeployAsApplicationConfigurationUpdate } from "./deployasapplicationconfigurationupdate";
import { ZeppelinMonitoringConfigurationUpdate } from "./zeppelinmonitoringconfigurationupdate";



// ZeppelinApplicationConfigurationUpdate
/** 
 * Updates to the configuration of Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinApplicationConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogConfigurationUpdate" })
  catalogConfigurationUpdate?: CatalogConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=CustomArtifactsConfigurationUpdate", elemType: CustomArtifactConfiguration })
  customArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=DeployAsApplicationConfigurationUpdate" })
  deployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=MonitoringConfigurationUpdate" })
  monitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;
}
