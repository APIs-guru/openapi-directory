import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetachPolicyXAmzTargetEnum {
    AwsOrganizationsV20161128DetachPolicy = "AWSOrganizationsV20161128.DetachPolicy"
}
export declare class DetachPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachPolicyXAmzTargetEnum;
}
export declare class DetachPolicyRequest extends SpeakeasyBase {
    headers: DetachPolicyHeaders;
    request: shared.DetachPolicyRequest;
}
export declare class DetachPolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    policyChangesInProgressException?: any;
    policyNotAttachedException?: any;
    policyNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    targetNotFoundException?: any;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
