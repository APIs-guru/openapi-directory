import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppGateway } from "./appgateway";


// ListAppGatewaysResponse
/** 
 * Response message for BeyondCorp.ListAppGateways.
**/
export class ListAppGatewaysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appGateways", elemType: shared.AppGateway })
  appGateways?: AppGateway[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
