import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDeploymentResult
/** 
 * Contains the response to a <code>CreateDeployment</code> request.
**/
export class CreateDeploymentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;
}
