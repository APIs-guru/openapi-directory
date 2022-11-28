import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnectorinstanceconfig";



// GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse
/** 
 * Response message for BeyondCorp.ResolveInstanceConfig.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceConfig" })
  instanceConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig;
}
