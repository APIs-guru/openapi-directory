import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";



// ListNetworksResponse
/** 
 * Response message containing the list of networks.
**/
export class ListNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networks", elemType: Network })
  networks?: Network[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
