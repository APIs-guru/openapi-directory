import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeploymentJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information about a deployment configuration.
**/
export declare class CreateDeploymentJobRequestBodyDeploymentConfig extends SpeakeasyBase {
    concurrentDeploymentPercentage?: number;
    downloadConditionFile?: shared.S3Object;
    failureThresholdPercentage?: number;
    robotDeploymentTimeoutInSeconds?: number;
}
export declare class CreateDeploymentJobRequestBody extends SpeakeasyBase {
    clientRequestToken: string;
    deploymentApplicationConfigs: shared.DeploymentApplicationConfig[];
    deploymentConfig?: CreateDeploymentJobRequestBodyDeploymentConfig;
    fleet: string;
    tags?: Map<string, string>;
}
export declare class CreateDeploymentJobRequest extends SpeakeasyBase {
    headers: CreateDeploymentJobHeaders;
    request: CreateDeploymentJobRequestBody;
}
export declare class CreateDeploymentJobResponse extends SpeakeasyBase {
    concurrentDeploymentException?: any;
    contentType: string;
    createDeploymentJobResponse?: shared.CreateDeploymentJobResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
