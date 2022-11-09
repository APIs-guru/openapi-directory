import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorInstanceConfig } from "./connectorinstanceconfig";


// ResolveInstanceConfigResponse
/** 
 * Response message for BeyondCorp.ResolveInstanceConfig.
**/
export class ResolveInstanceConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceConfig" })
  instanceConfig?: ConnectorInstanceConfig;
}
