import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGovCloudAccountXAmzTargetEnum {
    AwsOrganizationsV20161128CreateGovCloudAccount = "AWSOrganizationsV20161128.CreateGovCloudAccount"
}
export declare class CreateGovCloudAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGovCloudAccountXAmzTargetEnum;
}
export declare class CreateGovCloudAccountRequest extends SpeakeasyBase {
    headers: CreateGovCloudAccountHeaders;
    request: shared.CreateGovCloudAccountRequest;
}
export declare class CreateGovCloudAccountResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    createGovCloudAccountResponse?: shared.CreateGovCloudAccountResponse;
    finalizingOrganizationException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
