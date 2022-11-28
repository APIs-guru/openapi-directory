import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { UserStorage } from "./userstorage";



// WorkspaceBundle
/** 
 * Describes a WorkSpace bundle.
**/
export class WorkspaceBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=ComputeType" })
  computeType?: ComputeType;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=RootStorage" })
  rootStorage?: RootStorage;

  @SpeakeasyMetadata({ data: "json, name=UserStorage" })
  userStorage?: UserStorage;
}
