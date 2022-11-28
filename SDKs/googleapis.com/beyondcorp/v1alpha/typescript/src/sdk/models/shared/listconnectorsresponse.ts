import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";



// ListConnectorsResponse
/** 
 * Response message for BeyondCorp.ListConnectors.
**/
export class ListConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectors", elemType: Connector })
  connectors?: Connector[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
