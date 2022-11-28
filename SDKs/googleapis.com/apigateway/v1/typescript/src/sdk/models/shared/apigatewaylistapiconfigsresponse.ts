import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfig } from "./apigatewayapiconfig";



// ApigatewayListApiConfigsResponse
/** 
 * Response message for ApiGatewayService.ListApiConfigs
**/
export class ApigatewayListApiConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiConfigs", elemType: ApigatewayApiConfig })
  apiConfigs?: ApigatewayApiConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
