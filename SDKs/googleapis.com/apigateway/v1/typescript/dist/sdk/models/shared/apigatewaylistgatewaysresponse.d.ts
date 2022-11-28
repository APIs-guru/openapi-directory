import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayGateway } from "./apigatewaygateway";
/**
 * Response message for ApiGatewayService.ListGateways
**/
export declare class ApigatewayListGatewaysResponse extends SpeakeasyBase {
    gateways?: ApigatewayGateway[];
    nextPageToken?: string;
    unreachableLocations?: string[];
}
