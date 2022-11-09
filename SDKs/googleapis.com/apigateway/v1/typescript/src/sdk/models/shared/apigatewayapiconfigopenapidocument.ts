import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";


// ApigatewayApiConfigOpenApiDocument
/** 
 * An OpenAPI Specification Document describing an API.
**/
export class ApigatewayApiConfigOpenApiDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: ApigatewayApiConfigFile;
}
