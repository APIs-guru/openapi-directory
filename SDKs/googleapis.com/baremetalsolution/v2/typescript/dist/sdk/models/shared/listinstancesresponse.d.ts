import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response message for the list of servers.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: Instance[];
    nextPageToken?: string;
    unreachable?: string[];
}
