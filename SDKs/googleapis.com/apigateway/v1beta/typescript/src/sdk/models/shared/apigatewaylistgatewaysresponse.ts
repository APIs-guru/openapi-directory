import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApigatewayGateway } from "./apigatewaygateway";


// ApigatewayListGatewaysResponse
/** 
 * Response message for ApiGatewayService.ListGateways
**/
export class ApigatewayListGatewaysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateways", elemType: shared.ApigatewayGateway })
  gateways?: ApigatewayGateway[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
