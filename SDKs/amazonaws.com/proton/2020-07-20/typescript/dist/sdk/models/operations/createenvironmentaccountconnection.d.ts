import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720CreateEnvironmentAccountConnection = "AwsProton20200720.CreateEnvironmentAccountConnection"
}
export declare class CreateEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class CreateEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    headers: CreateEnvironmentAccountConnectionHeaders;
    request: shared.CreateEnvironmentAccountConnectionInput;
}
export declare class CreateEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createEnvironmentAccountConnectionOutput?: shared.CreateEnvironmentAccountConnectionOutput;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
