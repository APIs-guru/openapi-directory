import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachPolicyXAmzTargetEnum {
    AwsOrganizationsV20161128AttachPolicy = "AWSOrganizationsV20161128.AttachPolicy"
}
export declare class AttachPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachPolicyXAmzTargetEnum;
}
export declare class AttachPolicyRequest extends SpeakeasyBase {
    headers: AttachPolicyHeaders;
    request: shared.AttachPolicyRequest;
}
export declare class AttachPolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    duplicatePolicyAttachmentException?: any;
    invalidInputException?: any;
    policyChangesInProgressException?: any;
    policyNotFoundException?: any;
    policyTypeNotEnabledException?: any;
    serviceException?: any;
    statusCode: number;
    targetNotFoundException?: any;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
