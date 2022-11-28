import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePolicyXAmzTargetEnum {
    AwsOrganizationsV20161128UpdatePolicy = "AWSOrganizationsV20161128.UpdatePolicy"
}
export declare class UpdatePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePolicyXAmzTargetEnum;
}
export declare class UpdatePolicyRequest extends SpeakeasyBase {
    headers: UpdatePolicyHeaders;
    request: shared.UpdatePolicyRequest;
}
export declare class UpdatePolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    duplicatePolicyException?: any;
    invalidInputException?: any;
    malformedPolicyDocumentException?: any;
    policyChangesInProgressException?: any;
    policyNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
    updatePolicyResponse?: shared.UpdatePolicyResponse;
}
