import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableAwsServiceAccessXAmzTargetEnum {
    AwsOrganizationsV20161128EnableAwsServiceAccess = "AWSOrganizationsV20161128.EnableAWSServiceAccess"
}
export declare class EnableAwsServiceAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableAwsServiceAccessXAmzTargetEnum;
}
export declare class EnableAwsServiceAccessRequest extends SpeakeasyBase {
    headers: EnableAwsServiceAccessHeaders;
    request: shared.EnableAwsServiceAccessRequest;
}
export declare class EnableAwsServiceAccessResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
