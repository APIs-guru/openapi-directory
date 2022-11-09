import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientConnectorService } from "./clientconnectorservice";


// ListClientConnectorServicesResponse
/** 
 * Message for response to listing ClientConnectorServices.
**/
export class ListClientConnectorServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientConnectorServices", elemType: shared.ClientConnectorService })
  clientConnectorServices?: ClientConnectorService[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
