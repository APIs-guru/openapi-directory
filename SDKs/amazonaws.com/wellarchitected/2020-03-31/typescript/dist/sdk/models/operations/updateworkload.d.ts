import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateWorkloadPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class UpdateWorkloadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateWorkloadRequestBodyEnvironmentEnum {
    Production = "PRODUCTION",
    Preproduction = "PREPRODUCTION"
}
export declare enum UpdateWorkloadRequestBodyImprovementStatusEnum {
    NotApplicable = "NOT_APPLICABLE",
    NotStarted = "NOT_STARTED",
    InProgress = "IN_PROGRESS",
    Complete = "COMPLETE",
    RiskAcknowledged = "RISK_ACKNOWLEDGED"
}
export declare class UpdateWorkloadRequestBody extends SpeakeasyBase {
    accountIds?: string[];
    architecturalDesign?: string;
    awsRegions?: string[];
    description?: string;
    environment?: UpdateWorkloadRequestBodyEnvironmentEnum;
    improvementStatus?: UpdateWorkloadRequestBodyImprovementStatusEnum;
    industry?: string;
    industryType?: string;
    isReviewOwnerUpdateAcknowledged?: boolean;
    nonAwsRegions?: string[];
    notes?: string;
    pillarPriorities?: string[];
    reviewOwner?: string;
    workloadName?: string;
}
export declare class UpdateWorkloadRequest extends SpeakeasyBase {
    pathParams: UpdateWorkloadPathParams;
    headers: UpdateWorkloadHeaders;
    request: UpdateWorkloadRequestBody;
}
export declare class UpdateWorkloadResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateWorkloadOutput?: shared.UpdateWorkloadOutput;
    validationException?: any;
}
