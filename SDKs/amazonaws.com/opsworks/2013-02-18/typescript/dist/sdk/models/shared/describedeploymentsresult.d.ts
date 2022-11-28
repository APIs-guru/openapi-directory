import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * Contains the response to a <code>DescribeDeployments</code> request.
**/
export declare class DescribeDeploymentsResult extends SpeakeasyBase {
    deployments?: Deployment[];
}
