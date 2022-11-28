import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720GetEnvironmentAccountConnection = "AwsProton20200720.GetEnvironmentAccountConnection"
}
export declare class GetEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnvironmentAccountConnectionXAmzTargetEnum;
}
export declare class GetEnvironmentAccountConnectionRequest extends SpeakeasyBase {
    headers: GetEnvironmentAccountConnectionHeaders;
    request: shared.GetEnvironmentAccountConnectionInput;
}
export declare class GetEnvironmentAccountConnectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEnvironmentAccountConnectionOutput?: shared.GetEnvironmentAccountConnectionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
