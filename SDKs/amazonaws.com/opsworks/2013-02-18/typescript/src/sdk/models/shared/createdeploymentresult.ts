import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDeploymentResult
/** 
 * Contains the response to a <code>CreateDeployment</code> request.
**/
export class CreateDeploymentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;
}
