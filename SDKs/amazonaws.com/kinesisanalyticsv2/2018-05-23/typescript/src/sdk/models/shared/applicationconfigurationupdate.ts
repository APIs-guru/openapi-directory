import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationCodeConfigurationUpdate } from "./applicationcodeconfigurationupdate";
import { ApplicationSnapshotConfigurationUpdate } from "./applicationsnapshotconfigurationupdate";
import { EnvironmentPropertyUpdates } from "./environmentpropertyupdates";
import { FlinkApplicationConfigurationUpdate } from "./flinkapplicationconfigurationupdate";
import { SqlApplicationConfigurationUpdate } from "./sqlapplicationconfigurationupdate";
import { VpcConfigurationUpdate } from "./vpcconfigurationupdate";
import { ZeppelinApplicationConfigurationUpdate } from "./zeppelinapplicationconfigurationupdate";


// ApplicationConfigurationUpdate
/** 
 * Describes updates to an application's configuration.
**/
export class ApplicationConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationCodeConfigurationUpdate" })
  applicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  @Metadata({ data: "json, name=ApplicationSnapshotConfigurationUpdate" })
  applicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  @Metadata({ data: "json, name=EnvironmentPropertyUpdates" })
  environmentPropertyUpdates?: EnvironmentPropertyUpdates;

  @Metadata({ data: "json, name=FlinkApplicationConfigurationUpdate" })
  flinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

  @Metadata({ data: "json, name=SqlApplicationConfigurationUpdate" })
  sqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  @Metadata({ data: "json, name=VpcConfigurationUpdates", elemType: shared.VpcConfigurationUpdate })
  vpcConfigurationUpdates?: VpcConfigurationUpdate[];

  @Metadata({ data: "json, name=ZeppelinApplicationConfigurationUpdate" })
  zeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
}
