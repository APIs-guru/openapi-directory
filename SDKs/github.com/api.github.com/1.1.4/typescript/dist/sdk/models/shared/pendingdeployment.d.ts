import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";
export declare class PendingDeploymentEnvironment extends SpeakeasyBase {
    htmlUrl?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    url?: string;
}
export declare class PendingDeploymentReviewers extends SpeakeasyBase {
    reviewer?: any;
    type?: DeploymentReviewerTypeEnum;
}
/**
 * Details of a deployment that is waiting for protection rules to pass
**/
export declare class PendingDeployment extends SpeakeasyBase {
    currentUserCanApprove: boolean;
    environment: PendingDeploymentEnvironment;
    reviewers: PendingDeploymentReviewers[];
    waitTimer: number;
    waitTimerStartedAt: Date;
}
