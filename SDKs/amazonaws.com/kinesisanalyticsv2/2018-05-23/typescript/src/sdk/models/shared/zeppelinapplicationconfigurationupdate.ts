import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogConfigurationUpdate } from "./catalogconfigurationupdate";
import { CustomArtifactConfiguration } from "./customartifactconfiguration";
import { DeployAsApplicationConfigurationUpdate } from "./deployasapplicationconfigurationupdate";
import { ZeppelinMonitoringConfigurationUpdate } from "./zeppelinmonitoringconfigurationupdate";


// ZeppelinApplicationConfigurationUpdate
/** 
 * Updates to the configuration of Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinApplicationConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogConfigurationUpdate" })
  catalogConfigurationUpdate?: CatalogConfigurationUpdate;

  @Metadata({ data: "json, name=CustomArtifactsConfigurationUpdate", elemType: shared.CustomArtifactConfiguration })
  customArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];

  @Metadata({ data: "json, name=DeployAsApplicationConfigurationUpdate" })
  deployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;

  @Metadata({ data: "json, name=MonitoringConfigurationUpdate" })
  monitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;
}
