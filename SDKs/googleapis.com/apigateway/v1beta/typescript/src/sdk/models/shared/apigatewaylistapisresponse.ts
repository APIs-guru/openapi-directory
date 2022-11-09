import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApigatewayApi } from "./apigatewayapi";


// ApigatewayListApisResponse
/** 
 * Response message for ApiGatewayService.ListApis
**/
export class ApigatewayListApisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apis", elemType: shared.ApigatewayApi })
  apis?: ApigatewayApi[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachableLocations" })
  unreachableLocations?: string[];
}
