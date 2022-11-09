import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteRetentionPolicyXAmzTargetEnum {
    WorkMailServiceDeleteRetentionPolicy = "WorkMailService.DeleteRetentionPolicy"
}
export declare class DeleteRetentionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRetentionPolicyXAmzTargetEnum;
}
export declare class DeleteRetentionPolicyRequest extends SpeakeasyBase {
    headers: DeleteRetentionPolicyHeaders;
    request: shared.DeleteRetentionPolicyRequest;
}
export declare class DeleteRetentionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteRetentionPolicyResponse?: Map<string, any>;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
