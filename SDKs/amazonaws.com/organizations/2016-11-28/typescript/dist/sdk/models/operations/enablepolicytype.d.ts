import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnablePolicyTypeXAmzTargetEnum {
    AwsOrganizationsV20161128EnablePolicyType = "AWSOrganizationsV20161128.EnablePolicyType"
}
export declare class EnablePolicyTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnablePolicyTypeXAmzTargetEnum;
}
export declare class EnablePolicyTypeRequest extends SpeakeasyBase {
    headers: EnablePolicyTypeHeaders;
    request: shared.EnablePolicyTypeRequest;
}
export declare class EnablePolicyTypeResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    enablePolicyTypeResponse?: shared.EnablePolicyTypeResponse;
    invalidInputException?: any;
    policyChangesInProgressException?: any;
    policyTypeAlreadyEnabledException?: any;
    policyTypeNotAvailableForOrganizationException?: any;
    rootNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
