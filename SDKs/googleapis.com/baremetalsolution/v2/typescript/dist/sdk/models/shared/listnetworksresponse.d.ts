import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
/**
 * Response message containing the list of networks.
**/
export declare class ListNetworksResponse extends SpeakeasyBase {
    networks?: Network[];
    nextPageToken?: string;
    unreachable?: string[];
}
