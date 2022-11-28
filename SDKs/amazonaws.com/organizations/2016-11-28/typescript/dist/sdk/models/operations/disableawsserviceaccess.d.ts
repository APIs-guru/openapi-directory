import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableAwsServiceAccessXAmzTargetEnum {
    AwsOrganizationsV20161128DisableAwsServiceAccess = "AWSOrganizationsV20161128.DisableAWSServiceAccess"
}
export declare class DisableAwsServiceAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableAwsServiceAccessXAmzTargetEnum;
}
export declare class DisableAwsServiceAccessRequest extends SpeakeasyBase {
    headers: DisableAwsServiceAccessHeaders;
    request: shared.DisableAwsServiceAccessRequest;
}
export declare class DisableAwsServiceAccessResponse extends SpeakeasyBase {
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
