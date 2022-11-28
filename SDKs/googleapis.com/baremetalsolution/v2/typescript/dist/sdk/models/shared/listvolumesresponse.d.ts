import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Response message containing the list of storage volumes.
**/
export declare class ListVolumesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    unreachable?: string[];
    volumes?: Volume[];
}
