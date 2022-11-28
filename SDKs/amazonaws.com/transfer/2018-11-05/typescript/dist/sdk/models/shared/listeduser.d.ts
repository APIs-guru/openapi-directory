import { SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
/**
 * Returns properties of the user that you specify.
**/
export declare class ListedUser extends SpeakeasyBase {
    arn: string;
    homeDirectory?: string;
    homeDirectoryType?: HomeDirectoryTypeEnum;
    role?: string;
    sshPublicKeyCount?: number;
    userName?: string;
}
