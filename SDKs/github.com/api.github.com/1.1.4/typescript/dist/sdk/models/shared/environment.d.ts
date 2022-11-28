import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentBranchPolicy } from "./deploymentbranchpolicy";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";
export declare class EnvironmentProtectionRules1 extends SpeakeasyBase {
    id: number;
    nodeId: string;
    type: string;
    waitTimer?: number;
}
export declare class EnvironmentProtectionRules2Reviewers extends SpeakeasyBase {
    reviewer?: any;
    type?: DeploymentReviewerTypeEnum;
}
export declare class EnvironmentProtectionRules2 extends SpeakeasyBase {
    id: number;
    nodeId: string;
    reviewers?: EnvironmentProtectionRules2Reviewers[];
    type: string;
}
export declare class EnvironmentProtectionRules3 extends SpeakeasyBase {
    id: number;
    nodeId: string;
    type: string;
}
/**
 * Details of a deployment environment
**/
export declare class Environment extends SpeakeasyBase {
    createdAt: Date;
    deploymentBranchPolicy?: DeploymentBranchPolicy;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    protectionRules?: any[];
    updatedAt: Date;
    url: string;
}
