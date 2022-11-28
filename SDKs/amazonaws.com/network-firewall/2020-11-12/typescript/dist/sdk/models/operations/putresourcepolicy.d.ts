import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResourcePolicyXAmzTargetEnum {
    NetworkFirewall20201112PutResourcePolicy = "NetworkFirewall_20201112.PutResourcePolicy"
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
    internalServerError?: any;
    invalidRequestException?: any;
    invalidResourcePolicyException?: any;
    putResourcePolicyResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
