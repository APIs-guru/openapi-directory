import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdClient } from "./adclient";


// ListAdClientsResponse
/** 
 * Response definition for the ad client list rpc.
**/
export class ListAdClientsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adClients", elemType: shared.AdClient })
  adClients?: AdClient[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
