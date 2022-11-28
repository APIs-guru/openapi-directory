import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResourcePolicyXAmzTargetEnum {
    SecretsmanagerPutResourcePolicy = "secretsmanager.PutResourcePolicy"
}
export declare class PutResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    headers: PutResourcePolicyHeaders;
    request: shared.PutResourcePolicyRequest;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    malformedPolicyDocumentException?: any;
    publicPolicyException?: any;
    putResourcePolicyResponse?: shared.PutResourcePolicyResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
