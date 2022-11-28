import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayGateway } from "./apigatewaygateway";



// ApigatewayListGatewaysResponse
/** 
 * Response message for ApiGatewayService.ListGateways
**/
export class ApigatewayListGatewaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateways", elemType: ApigatewayGateway })
  gateways?: ApigatewayGateway[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
