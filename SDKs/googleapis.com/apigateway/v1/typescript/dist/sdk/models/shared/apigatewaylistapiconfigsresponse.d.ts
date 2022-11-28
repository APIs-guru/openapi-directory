import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfig } from "./apigatewayapiconfig";
/**
 * Response message for ApiGatewayService.ListApiConfigs
**/
export declare class ApigatewayListApiConfigsResponse extends SpeakeasyBase {
    apiConfigs?: ApigatewayApiConfig[];
    nextPageToken?: string;
    unreachableLocations?: string[];
}
