import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePolicyXAmzTargetEnum {
    AwsOrganizationsV20161128CreatePolicy = "AWSOrganizationsV20161128.CreatePolicy"
}
export declare class CreatePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePolicyXAmzTargetEnum;
}
export declare class CreatePolicyRequest extends SpeakeasyBase {
    headers: CreatePolicyHeaders;
    request: shared.CreatePolicyRequest;
}
export declare class CreatePolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    createPolicyResponse?: shared.CreatePolicyResponse;
    duplicatePolicyException?: any;
    invalidInputException?: any;
    malformedPolicyDocumentException?: any;
    policyTypeNotAvailableForOrganizationException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
