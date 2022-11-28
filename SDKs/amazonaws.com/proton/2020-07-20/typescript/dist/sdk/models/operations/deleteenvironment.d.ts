import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEnvironmentXAmzTargetEnum {
    AwsProton20200720DeleteEnvironment = "AwsProton20200720.DeleteEnvironment"
}
export declare class DeleteEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentXAmzTargetEnum;
}
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    headers: DeleteEnvironmentHeaders;
    request: shared.DeleteEnvironmentInput;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteEnvironmentOutput?: shared.DeleteEnvironmentOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
