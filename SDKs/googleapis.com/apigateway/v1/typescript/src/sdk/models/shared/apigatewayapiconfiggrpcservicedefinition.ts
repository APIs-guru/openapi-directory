import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";


// ApigatewayApiConfigGrpcServiceDefinition
/** 
 * A gRPC service definition.
**/
export class ApigatewayApiConfigGrpcServiceDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileDescriptorSet" })
  fileDescriptorSet?: ApigatewayApiConfigFile;

  @Metadata({ data: "json, name=source", elemType: shared.ApigatewayApiConfigFile })
  source?: ApigatewayApiConfigFile[];
}
