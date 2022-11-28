import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";



// DescribeDeploymentsResult
/** 
 * Contains the response to a <code>DescribeDeployments</code> request.
**/
export class DescribeDeploymentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deployments", elemType: Deployment })
  deployments?: Deployment[];
}
