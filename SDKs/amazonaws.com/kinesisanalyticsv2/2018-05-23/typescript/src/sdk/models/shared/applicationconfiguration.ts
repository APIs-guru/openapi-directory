import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ApplicationCodeConfiguration" })
  applicationCodeConfiguration?: ApplicationCodeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ApplicationSnapshotConfiguration" })
  applicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentProperties" })
  environmentProperties?: EnvironmentProperties;

  @SpeakeasyMetadata({ data: "json, name=FlinkApplicationConfiguration" })
  flinkApplicationConfiguration?: FlinkApplicationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SqlApplicationConfiguration" })
  sqlApplicationConfiguration?: SqlApplicationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurations", elemType: VpcConfiguration })
  vpcConfigurations?: VpcConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=ZeppelinApplicationConfiguration" })
  zeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
}
