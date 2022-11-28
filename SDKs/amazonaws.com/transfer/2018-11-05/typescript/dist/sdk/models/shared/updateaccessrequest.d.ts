import { SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";
export declare class UpdateAccessRequest extends SpeakeasyBase {
    externalId: string;
    homeDirectory?: string;
    homeDirectoryMappings?: HomeDirectoryMapEntry[];
    homeDirectoryType?: HomeDirectoryTypeEnum;
    policy?: string;
    posixProfile?: PosixProfile;
    role?: string;
    serverId: string;
}
