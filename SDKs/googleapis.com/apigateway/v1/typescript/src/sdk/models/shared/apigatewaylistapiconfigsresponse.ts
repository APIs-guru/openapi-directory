import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApigatewayApiConfig } from "./apigatewayapiconfig";


// ApigatewayListApiConfigsResponse
/** 
 * Response message for ApiGatewayService.ListApiConfigs
**/
export class ApigatewayListApiConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiConfigs", elemType: shared.ApigatewayApiConfig })
  apiConfigs?: ApigatewayApiConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
