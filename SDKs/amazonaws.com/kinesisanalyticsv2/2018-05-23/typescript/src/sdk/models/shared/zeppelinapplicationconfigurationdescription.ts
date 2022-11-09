import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogConfigurationDescription } from "./catalogconfigurationdescription";
import { CustomArtifactConfigurationDescription } from "./customartifactconfigurationdescription";
import { DeployAsApplicationConfigurationDescription } from "./deployasapplicationconfigurationdescription";
import { ZeppelinMonitoringConfigurationDescription } from "./zeppelinmonitoringconfigurationdescription";


// ZeppelinApplicationConfigurationDescription
/** 
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinApplicationConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogConfigurationDescription" })
  catalogConfigurationDescription?: CatalogConfigurationDescription;

  @Metadata({ data: "json, name=CustomArtifactsConfigurationDescription", elemType: shared.CustomArtifactConfigurationDescription })
  customArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[];

  @Metadata({ data: "json, name=DeployAsApplicationConfigurationDescription" })
  deployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;

  @Metadata({ data: "json, name=MonitoringConfigurationDescription" })
  monitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription;
}
