import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEnvironmentXAmzTargetEnum {
    AwsProton20200720GetEnvironment = "AwsProton20200720.GetEnvironment"
}
export declare class GetEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnvironmentXAmzTargetEnum;
}
export declare class GetEnvironmentRequest extends SpeakeasyBase {
    headers: GetEnvironmentHeaders;
    request: shared.GetEnvironmentInput;
}
export declare class GetEnvironmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEnvironmentOutput?: shared.GetEnvironmentOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
