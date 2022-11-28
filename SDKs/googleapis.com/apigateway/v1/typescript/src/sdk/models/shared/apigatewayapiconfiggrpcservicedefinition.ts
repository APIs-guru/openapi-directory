import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";



// ApigatewayApiConfigGrpcServiceDefinition
/** 
 * A gRPC service definition.
**/
export class ApigatewayApiConfigGrpcServiceDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileDescriptorSet" })
  fileDescriptorSet?: ApigatewayApiConfigFile;

  @SpeakeasyMetadata({ data: "json, name=source", elemType: ApigatewayApiConfigFile })
  source?: ApigatewayApiConfigFile[];
}
