import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { Tag } from "./tag";
import { UserStorage } from "./userstorage";


export class CreateWorkspaceBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleDescription" })
  bundleDescription: string;

  @Metadata({ data: "json, name=BundleName" })
  bundleName: string;

  @Metadata({ data: "json, name=ComputeType" })
  computeType: ComputeType;

  @Metadata({ data: "json, name=ImageId" })
  imageId: string;

  @Metadata({ data: "json, name=RootStorage" })
  rootStorage?: RootStorage;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserStorage" })
  userStorage: UserStorage;
}
