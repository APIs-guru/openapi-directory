import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LeaveOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128LeaveOrganization = "AWSOrganizationsV20161128.LeaveOrganization"
}
export declare class LeaveOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LeaveOrganizationXAmzTargetEnum;
}
export declare class LeaveOrganizationRequest extends SpeakeasyBase {
    headers: LeaveOrganizationHeaders;
}
export declare class LeaveOrganizationResponse extends SpeakeasyBase {
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
