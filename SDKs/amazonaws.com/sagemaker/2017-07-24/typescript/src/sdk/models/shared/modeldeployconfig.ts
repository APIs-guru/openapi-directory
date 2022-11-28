import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelDeployConfig
/** 
 * Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
**/
export class ModelDeployConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoGenerateEndpointName" })
  autoGenerateEndpointName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName?: string;
}
