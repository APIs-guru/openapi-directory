import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Network } from "./network";


// ListNetworksResponse
/** 
 * Response message containing the list of networks.
**/
export class ListNetworksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=networks", elemType: shared.Network })
  networks?: Network[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
