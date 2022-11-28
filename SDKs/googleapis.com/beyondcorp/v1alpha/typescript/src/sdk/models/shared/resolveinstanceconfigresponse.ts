import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorInstanceConfig } from "./connectorinstanceconfig";



// ResolveInstanceConfigResponse
/** 
 * Response message for BeyondCorp.ResolveInstanceConfig.
**/
export class ResolveInstanceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceConfig" })
  instanceConfig?: ConnectorInstanceConfig;
}
