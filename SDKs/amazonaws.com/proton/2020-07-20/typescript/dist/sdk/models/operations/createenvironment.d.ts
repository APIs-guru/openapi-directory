import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEnvironmentXAmzTargetEnum {
    AwsProton20200720CreateEnvironment = "AwsProton20200720.CreateEnvironment"
}
export declare class CreateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentXAmzTargetEnum;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    headers: CreateEnvironmentHeaders;
    request: shared.CreateEnvironmentInput;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createEnvironmentOutput?: shared.CreateEnvironmentOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
