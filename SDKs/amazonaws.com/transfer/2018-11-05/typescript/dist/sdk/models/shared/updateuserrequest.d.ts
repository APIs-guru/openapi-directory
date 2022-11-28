import { SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";
export declare class UpdateUserRequest extends SpeakeasyBase {
    homeDirectory?: string;
    homeDirectoryMappings?: HomeDirectoryMapEntry[];
    homeDirectoryType?: HomeDirectoryTypeEnum;
    policy?: string;
    posixProfile?: PosixProfile;
    role?: string;
    serverId: string;
    userName: string;
}
