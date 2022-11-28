import { SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";
/**
 * Describes the properties of the access that was specified.
**/
export declare class DescribedAccess extends SpeakeasyBase {
    externalId?: string;
    homeDirectory?: string;
    homeDirectoryMappings?: HomeDirectoryMapEntry[];
    homeDirectoryType?: HomeDirectoryTypeEnum;
    policy?: string;
    posixProfile?: PosixProfile;
    role?: string;
}
