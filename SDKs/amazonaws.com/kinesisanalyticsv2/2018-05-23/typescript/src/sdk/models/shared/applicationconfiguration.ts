import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationCodeConfiguration } from "./applicationcodeconfiguration";
import { ApplicationSnapshotConfiguration } from "./applicationsnapshotconfiguration";
import { EnvironmentProperties } from "./environmentproperties";
import { FlinkApplicationConfiguration } from "./flinkapplicationconfiguration";
import { SqlApplicationConfiguration } from "./sqlapplicationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";
import { ZeppelinApplicationConfiguration } from "./zeppelinapplicationconfiguration";


// ApplicationConfiguration
/** 
 * Specifies the creation parameters for a Kinesis Data Analytics application.
**/
export class ApplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationCodeConfiguration" })
  applicationCodeConfiguration?: ApplicationCodeConfiguration;

  @Metadata({ data: "json, name=ApplicationSnapshotConfiguration" })
  applicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  @Metadata({ data: "json, name=EnvironmentProperties" })
  environmentProperties?: EnvironmentProperties;

  @Metadata({ data: "json, name=FlinkApplicationConfiguration" })
  flinkApplicationConfiguration?: FlinkApplicationConfiguration;

  @Metadata({ data: "json, name=SqlApplicationConfiguration" })
  sqlApplicationConfiguration?: SqlApplicationConfiguration;

  @Metadata({ data: "json, name=VpcConfigurations", elemType: shared.VpcConfiguration })
  vpcConfigurations?: VpcConfiguration[];

  @Metadata({ data: "json, name=ZeppelinApplicationConfiguration" })
  zeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
}
