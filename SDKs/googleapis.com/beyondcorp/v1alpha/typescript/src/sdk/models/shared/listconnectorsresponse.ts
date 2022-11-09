import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connector } from "./connector";


// ListConnectorsResponse
/** 
 * Response message for BeyondCorp.ListConnectors.
**/
export class ListConnectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectors", elemType: shared.Connector })
  connectors?: Connector[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
