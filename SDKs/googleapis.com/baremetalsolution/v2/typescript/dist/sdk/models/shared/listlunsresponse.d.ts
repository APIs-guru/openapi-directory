import { SpeakeasyBase } from "../../../internal/utils";
import { Lun } from "./lun";
/**
 * Response message containing the list of storage volume luns.
**/
export declare class ListLunsResponse extends SpeakeasyBase {
    luns?: Lun[];
    nextPageToken?: string;
    unreachable?: string[];
}
