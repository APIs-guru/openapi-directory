import { SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";
import { Tag } from "./tag";
export declare class CreateUserRequest extends SpeakeasyBase {
    homeDirectory?: string;
    homeDirectoryMappings?: HomeDirectoryMapEntry[];
    homeDirectoryType?: HomeDirectoryTypeEnum;
    policy?: string;
    posixProfile?: PosixProfile;
    role: string;
    serverId: string;
    sshPublicKeyBody?: string;
    tags?: Tag[];
    userName: string;
}
