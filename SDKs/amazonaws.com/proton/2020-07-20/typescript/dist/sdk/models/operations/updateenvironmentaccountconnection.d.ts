import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentAccountConnection = "AwsProton20200720.UpdateEnvironmentAccountConnection"
}
export declare class UpdateEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class UpdateEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    headers: UpdateEnvironmentAccountConnectionHeaders;
    request: shared.UpdateEnvironmentAccountConnectionInput;
}
export declare class UpdateEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEnvironmentAccountConnectionOutput?: shared.UpdateEnvironmentAccountConnectionOutput;
    validationException?: any;
}
