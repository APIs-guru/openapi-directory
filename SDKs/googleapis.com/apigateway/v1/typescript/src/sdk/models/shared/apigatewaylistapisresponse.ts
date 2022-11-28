import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApi } from "./apigatewayapi";



// ApigatewayListApisResponse
/** 
 * Response message for ApiGatewayService.ListApis
**/
export class ApigatewayListApisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apis", elemType: ApigatewayApi })
  apis?: ApigatewayApi[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
