import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AcceptEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720AcceptEnvironmentAccountConnection = "AwsProton20200720.AcceptEnvironmentAccountConnection"
}
export declare class AcceptEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class AcceptEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    headers: AcceptEnvironmentAccountConnectionHeaders;
    request: shared.AcceptEnvironmentAccountConnectionInput;
}
export declare class AcceptEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    acceptEnvironmentAccountConnectionOutput?: shared.AcceptEnvironmentAccountConnectionOutput;
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
