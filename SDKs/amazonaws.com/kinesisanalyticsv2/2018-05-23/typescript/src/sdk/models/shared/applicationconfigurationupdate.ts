import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ApplicationCodeConfigurationUpdate" })
  applicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=ApplicationSnapshotConfigurationUpdate" })
  applicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentPropertyUpdates" })
  environmentPropertyUpdates?: EnvironmentPropertyUpdates;

  @SpeakeasyMetadata({ data: "json, name=FlinkApplicationConfigurationUpdate" })
  flinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=SqlApplicationConfigurationUpdate" })
  sqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurationUpdates", elemType: VpcConfigurationUpdate })
  vpcConfigurationUpdates?: VpcConfigurationUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ZeppelinApplicationConfigurationUpdate" })
  zeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
}
