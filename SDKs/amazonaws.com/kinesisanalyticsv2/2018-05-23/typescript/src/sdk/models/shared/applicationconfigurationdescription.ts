import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationCodeConfigurationDescription } from "./applicationcodeconfigurationdescription";
import { ApplicationSnapshotConfigurationDescription } from "./applicationsnapshotconfigurationdescription";
import { EnvironmentPropertyDescriptions } from "./environmentpropertydescriptions";
import { FlinkApplicationConfigurationDescription } from "./flinkapplicationconfigurationdescription";
import { RunConfigurationDescription } from "./runconfigurationdescription";
import { SqlApplicationConfigurationDescription } from "./sqlapplicationconfigurationdescription";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
import { ZeppelinApplicationConfigurationDescription } from "./zeppelinapplicationconfigurationdescription";



// ApplicationConfigurationDescription
/** 
 * Describes details about the application code and starting parameters for a Kinesis Data Analytics application.
**/
export class ApplicationConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationCodeConfigurationDescription" })
  applicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=ApplicationSnapshotConfigurationDescription" })
  applicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentPropertyDescriptions" })
  environmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  @SpeakeasyMetadata({ data: "json, name=FlinkApplicationConfigurationDescription" })
  flinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=RunConfigurationDescription" })
  runConfigurationDescription?: RunConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=SqlApplicationConfigurationDescription" })
  sqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurationDescriptions", elemType: VpcConfigurationDescription })
  vpcConfigurationDescriptions?: VpcConfigurationDescription[];

  @SpeakeasyMetadata({ data: "json, name=ZeppelinApplicationConfigurationDescription" })
  zeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
}
