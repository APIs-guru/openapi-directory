import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig } from "./googlecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig";



// GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse
/** 
 * Response message for BeyondCorp.ResolveInstanceConfig.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceConfig" })
  instanceConfig?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig;
}
