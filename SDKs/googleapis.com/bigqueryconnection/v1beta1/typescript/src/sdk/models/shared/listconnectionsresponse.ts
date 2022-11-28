import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



// ListConnectionsResponse
/** 
 * The response for ConnectionService.ListConnections.
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
