import { SpeakeasyBase } from "../../../internal/utils";
import { AdClient } from "./adclient";
/**
 * Response definition for the ad client list rpc.
**/
export declare class ListAdClientsResponse extends SpeakeasyBase {
    adClients?: AdClient[];
    nextPageToken?: string;
}
