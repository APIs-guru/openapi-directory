import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Deployment } from "./deployment";


// DescribeDeploymentsResult
/** 
 * Contains the response to a <code>DescribeDeployments</code> request.
**/
export class DescribeDeploymentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Deployments", elemType: shared.Deployment })
  deployments?: Deployment[];
}
