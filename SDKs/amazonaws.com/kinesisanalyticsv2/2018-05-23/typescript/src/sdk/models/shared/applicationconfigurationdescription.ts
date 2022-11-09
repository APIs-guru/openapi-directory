import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ApplicationCodeConfigurationDescription" })
  applicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  @Metadata({ data: "json, name=ApplicationSnapshotConfigurationDescription" })
  applicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  @Metadata({ data: "json, name=EnvironmentPropertyDescriptions" })
  environmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  @Metadata({ data: "json, name=FlinkApplicationConfigurationDescription" })
  flinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  @Metadata({ data: "json, name=RunConfigurationDescription" })
  runConfigurationDescription?: RunConfigurationDescription;

  @Metadata({ data: "json, name=SqlApplicationConfigurationDescription" })
  sqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

  @Metadata({ data: "json, name=VpcConfigurationDescriptions", elemType: shared.VpcConfigurationDescription })
  vpcConfigurationDescriptions?: VpcConfigurationDescription[];

  @Metadata({ data: "json, name=ZeppelinApplicationConfigurationDescription" })
  zeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
}
