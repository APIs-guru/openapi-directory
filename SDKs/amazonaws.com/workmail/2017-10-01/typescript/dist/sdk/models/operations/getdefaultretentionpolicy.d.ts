import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetDefaultRetentionPolicyXAmzTargetEnum {
    WorkMailServiceGetDefaultRetentionPolicy = "WorkMailService.GetDefaultRetentionPolicy"
}
export declare class GetDefaultRetentionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDefaultRetentionPolicyXAmzTargetEnum;
}
export declare class GetDefaultRetentionPolicyRequest extends SpeakeasyBase {
    headers: GetDefaultRetentionPolicyHeaders;
    request: shared.GetDefaultRetentionPolicyRequest;
}
export declare class GetDefaultRetentionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getDefaultRetentionPolicyResponse?: shared.GetDefaultRetentionPolicyResponse;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
