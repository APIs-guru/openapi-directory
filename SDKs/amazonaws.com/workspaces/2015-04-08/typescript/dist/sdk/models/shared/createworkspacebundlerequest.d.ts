import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { Tag } from "./tag";
import { UserStorage } from "./userstorage";
export declare class CreateWorkspaceBundleRequest extends SpeakeasyBase {
    bundleDescription: string;
    bundleName: string;
    computeType: ComputeType;
    imageId: string;
    rootStorage?: RootStorage;
    tags?: Tag[];
    userStorage: UserStorage;
}
