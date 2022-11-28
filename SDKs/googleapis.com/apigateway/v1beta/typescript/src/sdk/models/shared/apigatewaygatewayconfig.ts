import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayBackendConfig } from "./apigatewaybackendconfig";



// ApigatewayGatewayConfig
/** 
 * Configuration settings for Gateways.
**/
export class ApigatewayGatewayConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendConfig" })
  backendConfig?: ApigatewayBackendConfig;
}
