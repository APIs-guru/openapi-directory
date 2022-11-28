import { SpeakeasyBase } from "../../../internal/utils";
import { FileFileKeys } from "./filefilekeys";
import { UserIdFileIdItem } from "./useridfileiditem";
import { Range } from "./range";
import { UserUserPublicKeyOutput } from "./useruserpublickey";
/**
 * Missing keys information
**/
export declare class MissingKeysResponseOutput extends SpeakeasyBase {
    files?: FileFileKeys[];
    items?: UserIdFileIdItem[];
    range?: Range;
    users?: UserUserPublicKeyOutput[];
}
