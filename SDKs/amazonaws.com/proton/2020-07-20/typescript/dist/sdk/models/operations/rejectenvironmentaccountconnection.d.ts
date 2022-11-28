import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RejectEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720RejectEnvironmentAccountConnection = "AwsProton20200720.RejectEnvironmentAccountConnection"
}
export declare class RejectEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class RejectEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    headers: RejectEnvironmentAccountConnectionHeaders;
    request: shared.RejectEnvironmentAccountConnectionInput;
}
export declare class RejectEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    rejectEnvironmentAccountConnectionOutput?: shared.RejectEnvironmentAccountConnectionOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
