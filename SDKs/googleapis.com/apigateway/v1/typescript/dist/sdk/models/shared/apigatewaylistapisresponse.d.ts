import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApi } from "./apigatewayapi";
/**
 * Response message for ApiGatewayService.ListApis
**/
export declare class ApigatewayListApisResponse extends SpeakeasyBase {
    apis?: ApigatewayApi[];
    nextPageToken?: string;
    unreachableLocations?: string[];
}
