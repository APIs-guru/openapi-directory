import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutContactPolicyXAmzTargetEnum {
    SsmContactsPutContactPolicy = "SSMContacts.PutContactPolicy"
}
export declare class PutContactPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutContactPolicyXAmzTargetEnum;
}
export declare class PutContactPolicyRequest extends SpeakeasyBase {
    headers: PutContactPolicyHeaders;
    request: shared.PutContactPolicyRequest;
}
export declare class PutContactPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    putContactPolicyResult?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
