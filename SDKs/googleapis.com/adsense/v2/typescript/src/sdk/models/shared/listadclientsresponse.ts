import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdClient } from "./adclient";



// ListAdClientsResponse
/** 
 * Response definition for the ad client list rpc.
**/
export class ListAdClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adClients", elemType: AdClient })
  adClients?: AdClient[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
