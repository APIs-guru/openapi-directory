import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisablePolicyTypeXAmzTargetEnum {
    AwsOrganizationsV20161128DisablePolicyType = "AWSOrganizationsV20161128.DisablePolicyType"
}
export declare class DisablePolicyTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisablePolicyTypeXAmzTargetEnum;
}
export declare class DisablePolicyTypeRequest extends SpeakeasyBase {
    headers: DisablePolicyTypeHeaders;
    request: shared.DisablePolicyTypeRequest;
}
export declare class DisablePolicyTypeResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    disablePolicyTypeResponse?: shared.DisablePolicyTypeResponse;
    invalidInputException?: any;
    policyChangesInProgressException?: any;
    policyTypeNotEnabledException?: any;
    rootNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
