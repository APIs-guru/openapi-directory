import { SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";
import { SshPublicKey } from "./sshpublickey";
import { Tag } from "./tag";
/**
 * Describes the properties of a user that was specified.
**/
export declare class DescribedUser extends SpeakeasyBase {
    arn: string;
    homeDirectory?: string;
    homeDirectoryMappings?: HomeDirectoryMapEntry[];
    homeDirectoryType?: HomeDirectoryTypeEnum;
    policy?: string;
    posixProfile?: PosixProfile;
    role?: string;
    sshPublicKeys?: SshPublicKey[];
    tags?: Tag[];
    userName?: string;
}
