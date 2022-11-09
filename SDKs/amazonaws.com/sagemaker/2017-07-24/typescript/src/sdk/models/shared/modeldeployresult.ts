import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelDeployResult
/** 
 * Provides information about the endpoint of the model deployment.
**/
export class ModelDeployResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;
}
