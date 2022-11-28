import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppGateway } from "./appgateway";



// ListAppGatewaysResponse
/** 
 * Response message for BeyondCorp.ListAppGateways.
**/
export class ListAppGatewaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appGateways", elemType: AppGateway })
  appGateways?: AppGateway[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
