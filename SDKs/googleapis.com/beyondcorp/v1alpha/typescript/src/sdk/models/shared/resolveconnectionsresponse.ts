import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionDetails } from "./connectiondetails";



// ResolveConnectionsResponse
/** 
 * Response message for BeyondCorp.ResolveConnections.
**/
export class ResolveConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionDetails", elemType: ConnectionDetails })
  connectionDetails?: ConnectionDetails[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
