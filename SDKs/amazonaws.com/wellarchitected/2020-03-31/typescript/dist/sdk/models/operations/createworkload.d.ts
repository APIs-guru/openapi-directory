import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateWorkloadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateWorkloadRequestBodyEnvironmentEnum {
    Production = "PRODUCTION",
    Preproduction = "PREPRODUCTION"
}
export declare class CreateWorkloadRequestBody extends SpeakeasyBase {
    accountIds?: string[];
    architecturalDesign?: string;
    awsRegions?: string[];
    clientRequestToken: string;
    description: string;
    environment: CreateWorkloadRequestBodyEnvironmentEnum;
    industry?: string;
    industryType?: string;
    lenses: string[];
    nonAwsRegions?: string[];
    notes?: string;
    pillarPriorities?: string[];
    reviewOwner: string;
    tags?: Map<string, string>;
    workloadName: string;
}
export declare class CreateWorkloadRequest extends SpeakeasyBase {
    headers: CreateWorkloadHeaders;
    request: CreateWorkloadRequestBody;
}
export declare class CreateWorkloadResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createWorkloadOutput?: shared.CreateWorkloadOutput;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
