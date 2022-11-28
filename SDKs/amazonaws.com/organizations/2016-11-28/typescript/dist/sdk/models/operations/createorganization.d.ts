import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128CreateOrganization = "AWSOrganizationsV20161128.CreateOrganization"
}
export declare class CreateOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOrganizationXAmzTargetEnum;
}
export declare class CreateOrganizationRequest extends SpeakeasyBase {
    headers: CreateOrganizationHeaders;
    request: shared.CreateOrganizationRequest;
}
export declare class CreateOrganizationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accessDeniedForDependencyException?: any;
    alreadyInOrganizationException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    createOrganizationResponse?: shared.CreateOrganizationResponse;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
