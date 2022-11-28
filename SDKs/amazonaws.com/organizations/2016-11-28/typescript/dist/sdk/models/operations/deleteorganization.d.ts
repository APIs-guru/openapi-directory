import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeleteOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128DeleteOrganization = "AWSOrganizationsV20161128.DeleteOrganization"
}
export declare class DeleteOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationXAmzTargetEnum;
}
export declare class DeleteOrganizationRequest extends SpeakeasyBase {
    headers: DeleteOrganizationHeaders;
}
export declare class DeleteOrganizationResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidInputException?: any;
    organizationNotEmptyException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
