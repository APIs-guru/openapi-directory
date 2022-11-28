import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelDeployResult
/** 
 * Provides information about the endpoint of the model deployment.
**/
export class ModelDeployResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName?: string;
}
