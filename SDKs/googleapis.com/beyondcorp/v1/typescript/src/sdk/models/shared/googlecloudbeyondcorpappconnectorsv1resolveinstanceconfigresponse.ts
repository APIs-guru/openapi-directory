import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig } from "./googlecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig";


// GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse
/** 
 * Response message for BeyondCorp.ResolveInstanceConfig.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceConfig" })
  instanceConfig?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig;
}
