import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogConfiguration } from "./catalogconfiguration";
import { CustomArtifactConfiguration } from "./customartifactconfiguration";
import { DeployAsApplicationConfiguration } from "./deployasapplicationconfiguration";
import { ZeppelinMonitoringConfiguration } from "./zeppelinmonitoringconfiguration";


// ZeppelinApplicationConfiguration
/** 
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinApplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogConfiguration" })
  catalogConfiguration?: CatalogConfiguration;

  @Metadata({ data: "json, name=CustomArtifactsConfiguration", elemType: shared.CustomArtifactConfiguration })
  customArtifactsConfiguration?: CustomArtifactConfiguration[];

  @Metadata({ data: "json, name=DeployAsApplicationConfiguration" })
  deployAsApplicationConfiguration?: DeployAsApplicationConfiguration;

  @Metadata({ data: "json, name=MonitoringConfiguration" })
  monitoringConfiguration?: ZeppelinMonitoringConfiguration;
}
