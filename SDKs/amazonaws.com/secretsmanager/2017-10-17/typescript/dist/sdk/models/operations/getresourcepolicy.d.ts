import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetResourcePolicyXAmzTargetEnum {
    SecretsmanagerGetResourcePolicy = "secretsmanager.GetResourcePolicy"
}
export declare class GetResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcePolicyXAmzTargetEnum;
}
export declare class GetResourcePolicyRequest extends SpeakeasyBase {
    headers: GetResourcePolicyHeaders;
    request: shared.GetResourcePolicyRequest;
}
export declare class GetResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    getResourcePolicyResponse?: shared.GetResourcePolicyResponse;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
