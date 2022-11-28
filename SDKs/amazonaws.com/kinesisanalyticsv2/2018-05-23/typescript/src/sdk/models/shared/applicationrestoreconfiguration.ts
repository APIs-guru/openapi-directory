import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationRestoreTypeEnum } from "./applicationrestoretypeenum";



// ApplicationRestoreConfiguration
/** 
 * Specifies the method and snapshot to use when restarting an application using previously saved application state.
**/
export class ApplicationRestoreConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationRestoreType" })
  applicationRestoreType: ApplicationRestoreTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SnapshotName" })
  snapshotName?: string;
}
