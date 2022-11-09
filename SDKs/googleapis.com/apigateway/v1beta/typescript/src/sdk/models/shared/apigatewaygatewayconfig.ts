import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApigatewayBackendConfig } from "./apigatewaybackendconfig";


// ApigatewayGatewayConfig
/** 
 * Configuration settings for Gateways.
**/
export class ApigatewayGatewayConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendConfig" })
  backendConfig?: ApigatewayBackendConfig;
}
