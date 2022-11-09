import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientGateway } from "./clientgateway";


// ListClientGatewaysResponse
/** 
 * Message for response to listing ClientGateways.
**/
export class ListClientGatewaysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientGateways", elemType: shared.ClientGateway })
  clientGateways?: ClientGateway[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
