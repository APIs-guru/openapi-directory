import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePolicyXAmzTargetEnum {
    AwsOrganizationsV20161128DeletePolicy = "AWSOrganizationsV20161128.DeletePolicy"
}
export declare class DeletePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePolicyXAmzTargetEnum;
}
export declare class DeletePolicyRequest extends SpeakeasyBase {
    headers: DeletePolicyHeaders;
    request: shared.DeletePolicyRequest;
}
export declare class DeletePolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidInputException?: any;
    policyInUseException?: any;
    policyNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
