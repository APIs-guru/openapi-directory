import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ValidateResourcePolicyXAmzTargetEnum {
    SecretsmanagerValidateResourcePolicy = "secretsmanager.ValidateResourcePolicy"
}
export declare class ValidateResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ValidateResourcePolicyXAmzTargetEnum;
}
export declare class ValidateResourcePolicyRequest extends SpeakeasyBase {
    headers: ValidateResourcePolicyHeaders;
    request: shared.ValidateResourcePolicyRequest;
}
export declare class ValidateResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    malformedPolicyDocumentException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validateResourcePolicyResponse?: shared.ValidateResourcePolicyResponse;
}
