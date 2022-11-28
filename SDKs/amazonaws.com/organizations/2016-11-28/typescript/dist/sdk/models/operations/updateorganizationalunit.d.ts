import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateOrganizationalUnitXAmzTargetEnum {
    AwsOrganizationsV20161128UpdateOrganizationalUnit = "AWSOrganizationsV20161128.UpdateOrganizationalUnit"
}
export declare class UpdateOrganizationalUnitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateOrganizationalUnitXAmzTargetEnum;
}
export declare class UpdateOrganizationalUnitRequest extends SpeakeasyBase {
    headers: UpdateOrganizationalUnitHeaders;
    request: shared.UpdateOrganizationalUnitRequest;
}
export declare class UpdateOrganizationalUnitResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    duplicateOrganizationalUnitException?: any;
    invalidInputException?: any;
    organizationalUnitNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateOrganizationalUnitResponse?: shared.UpdateOrganizationalUnitResponse;
}
