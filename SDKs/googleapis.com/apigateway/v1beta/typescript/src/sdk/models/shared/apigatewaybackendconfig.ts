import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApigatewayBackendConfig
/** 
 * Configuration for all backends.
**/
export class ApigatewayBackendConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleServiceAccount" })
  googleServiceAccount?: string;
}
