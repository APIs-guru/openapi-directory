import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientConnectorService } from "./clientconnectorservice";



// ListClientConnectorServicesResponse
/** 
 * Message for response to listing ClientConnectorServices.
**/
export class ListClientConnectorServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientConnectorServices", elemType: ClientConnectorService })
  clientConnectorServices?: ClientConnectorService[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
