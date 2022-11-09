import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationRestoreTypeEnum } from "./applicationrestoretypeenum";


// ApplicationRestoreConfiguration
/** 
 * Specifies the method and snapshot to use when restarting an application using previously saved application state.
**/
export class ApplicationRestoreConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationRestoreType" })
  applicationRestoreType: ApplicationRestoreTypeEnum;

  @Metadata({ data: "json, name=SnapshotName" })
  snapshotName?: string;
}
