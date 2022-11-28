import { SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
/**
 * Lists the properties for one or more specified associated accesses.
**/
export declare class ListedAccess extends SpeakeasyBase {
    externalId?: string;
    homeDirectory?: string;
    homeDirectoryType?: HomeDirectoryTypeEnum;
    role?: string;
}
