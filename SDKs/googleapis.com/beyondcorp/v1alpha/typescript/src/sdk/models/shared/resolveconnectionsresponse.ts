import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionDetails } from "./connectiondetails";


// ResolveConnectionsResponse
/** 
 * Response message for BeyondCorp.ResolveConnections.
**/
export class ResolveConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionDetails", elemType: shared.ConnectionDetails })
  connectionDetails?: ConnectionDetails[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
