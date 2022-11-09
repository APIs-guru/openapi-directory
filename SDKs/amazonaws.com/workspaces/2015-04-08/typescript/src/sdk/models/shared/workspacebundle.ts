import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { UserStorage } from "./userstorage";


// WorkspaceBundle
/** 
 * Describes a WorkSpace bundle.
**/
export class WorkspaceBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=ComputeType" })
  computeType?: ComputeType;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=RootStorage" })
  rootStorage?: RootStorage;

  @Metadata({ data: "json, name=UserStorage" })
  userStorage?: UserStorage;
}
