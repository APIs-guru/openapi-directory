import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRetentionPolicyXAmzTargetEnum {
    WorkMailServicePutRetentionPolicy = "WorkMailService.PutRetentionPolicy"
}
export declare class PutRetentionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRetentionPolicyXAmzTargetEnum;
}
export declare class PutRetentionPolicyRequest extends SpeakeasyBase {
    headers: PutRetentionPolicyHeaders;
    request: shared.PutRetentionPolicyRequest;
}
export declare class PutRetentionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    limitExceededException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    putRetentionPolicyResponse?: Map<string, any>;
    statusCode: number;
}
