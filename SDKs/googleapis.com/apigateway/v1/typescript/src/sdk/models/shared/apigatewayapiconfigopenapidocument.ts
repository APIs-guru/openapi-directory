import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";



// ApigatewayApiConfigOpenApiDocument
/** 
 * An OpenAPI Specification Document describing an API.
**/
export class ApigatewayApiConfigOpenApiDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: ApigatewayApiConfigFile;
}
