import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApigatewayBackendConfig
/** 
 * Configuration for all backends.
**/
export class ApigatewayBackendConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleServiceAccount" })
  googleServiceAccount?: string;
}
