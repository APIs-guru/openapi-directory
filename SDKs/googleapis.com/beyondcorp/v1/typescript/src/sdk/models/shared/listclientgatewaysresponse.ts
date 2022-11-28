import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientGateway } from "./clientgateway";



// ListClientGatewaysResponse
/** 
 * Message for response to listing ClientGateways.
**/
export class ListClientGatewaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientGateways", elemType: ClientGateway })
  clientGateways?: ClientGateway[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
