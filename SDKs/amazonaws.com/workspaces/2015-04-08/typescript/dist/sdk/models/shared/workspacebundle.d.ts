import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeType } from "./computetype";
import { RootStorage } from "./rootstorage";
import { UserStorage } from "./userstorage";
/**
 * Describes a WorkSpace bundle.
**/
export declare class WorkspaceBundle extends SpeakeasyBase {
    bundleId?: string;
    computeType?: ComputeType;
    creationTime?: Date;
    description?: string;
    imageId?: string;
    lastUpdatedTime?: Date;
    name?: string;
    owner?: string;
    rootStorage?: RootStorage;
    userStorage?: UserStorage;
}
