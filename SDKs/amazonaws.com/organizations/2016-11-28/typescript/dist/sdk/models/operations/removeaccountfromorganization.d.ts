import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveAccountFromOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128RemoveAccountFromOrganization = "AWSOrganizationsV20161128.RemoveAccountFromOrganization"
}
export declare class RemoveAccountFromOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveAccountFromOrganizationXAmzTargetEnum;
}
export declare class RemoveAccountFromOrganizationRequest extends SpeakeasyBase {
    headers: RemoveAccountFromOrganizationHeaders;
    request: shared.RemoveAccountFromOrganizationRequest;
}
export declare class RemoveAccountFromOrganizationResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    accountNotFoundException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    masterCannotLeaveOrganizationException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
