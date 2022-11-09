import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connection } from "./connection";


// ListConnectionsResponse
/** 
 * The response for ConnectionService.ListConnections.
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections", elemType: shared.Connection })
  connections?: Connection[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
