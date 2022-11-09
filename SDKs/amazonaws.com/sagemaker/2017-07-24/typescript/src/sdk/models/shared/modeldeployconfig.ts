import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelDeployConfig
/** 
 * Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
**/
export class ModelDeployConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoGenerateEndpointName" })
  autoGenerateEndpointName?: boolean;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;
}
