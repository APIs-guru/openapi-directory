import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogConfigurationDescription } from "./catalogconfigurationdescription";
import { CustomArtifactConfigurationDescription } from "./customartifactconfigurationdescription";
import { DeployAsApplicationConfigurationDescription } from "./deployasapplicationconfigurationdescription";
import { ZeppelinMonitoringConfigurationDescription } from "./zeppelinmonitoringconfigurationdescription";



// ZeppelinApplicationConfigurationDescription
/** 
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinApplicationConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogConfigurationDescription" })
  catalogConfigurationDescription?: CatalogConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=CustomArtifactsConfigurationDescription", elemType: CustomArtifactConfigurationDescription })
  customArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[];

  @SpeakeasyMetadata({ data: "json, name=DeployAsApplicationConfigurationDescription" })
  deployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=MonitoringConfigurationDescription" })
  monitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription;
}
