import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContactPolicyXAmzTargetEnum {
    SsmContactsGetContactPolicy = "SSMContacts.GetContactPolicy"
}
export declare class GetContactPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContactPolicyXAmzTargetEnum;
}
export declare class GetContactPolicyRequest extends SpeakeasyBase {
    headers: GetContactPolicyHeaders;
    request: shared.GetContactPolicyRequest;
}
export declare class GetContactPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContactPolicyResult?: shared.GetContactPolicyResult;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
