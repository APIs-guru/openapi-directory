import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateEnvironmentXAmzTargetEnum {
    AwsProton20200720UpdateEnvironment = "AwsProton20200720.UpdateEnvironment"
}
export declare class UpdateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentXAmzTargetEnum;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    headers: UpdateEnvironmentHeaders;
    request: shared.UpdateEnvironmentInput;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEnvironmentOutput?: shared.UpdateEnvironmentOutput;
    validationException?: any;
}
