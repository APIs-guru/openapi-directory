import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { Tag } from "./tag";
import { UserStorage } from "./userstorage";



export class CreateWorkspaceBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleDescription" })
  bundleDescription: string;

  @SpeakeasyMetadata({ data: "json, name=BundleName" })
  bundleName: string;

  @SpeakeasyMetadata({ data: "json, name=ComputeType" })
  computeType: ComputeType;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "json, name=RootStorage" })
  rootStorage?: RootStorage;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserStorage" })
  userStorage: UserStorage;
}
