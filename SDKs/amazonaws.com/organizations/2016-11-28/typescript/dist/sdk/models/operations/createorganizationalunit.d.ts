import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateOrganizationalUnitXAmzTargetEnum {
    AwsOrganizationsV20161128CreateOrganizationalUnit = "AWSOrganizationsV20161128.CreateOrganizationalUnit"
}
export declare class CreateOrganizationalUnitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOrganizationalUnitXAmzTargetEnum;
}
export declare class CreateOrganizationalUnitRequest extends SpeakeasyBase {
    headers: CreateOrganizationalUnitHeaders;
    request: shared.CreateOrganizationalUnitRequest;
}
export declare class CreateOrganizationalUnitResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    createOrganizationalUnitResponse?: shared.CreateOrganizationalUnitResponse;
    duplicateOrganizationalUnitException?: any;
    invalidInputException?: any;
    parentNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
