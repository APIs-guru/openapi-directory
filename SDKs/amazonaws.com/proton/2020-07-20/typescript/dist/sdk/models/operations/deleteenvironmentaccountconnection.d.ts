import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720DeleteEnvironmentAccountConnection = "AwsProton20200720.DeleteEnvironmentAccountConnection"
}
export declare class DeleteEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class DeleteEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    headers: DeleteEnvironmentAccountConnectionHeaders;
    request: shared.DeleteEnvironmentAccountConnectionInput;
}
export declare class DeleteEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteEnvironmentAccountConnectionOutput?: shared.DeleteEnvironmentAccountConnectionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
