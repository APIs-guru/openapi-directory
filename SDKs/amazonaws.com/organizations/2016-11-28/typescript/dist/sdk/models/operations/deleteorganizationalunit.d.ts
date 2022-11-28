import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteOrganizationalUnitXAmzTargetEnum {
    AwsOrganizationsV20161128DeleteOrganizationalUnit = "AWSOrganizationsV20161128.DeleteOrganizationalUnit"
}
export declare class DeleteOrganizationalUnitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationalUnitXAmzTargetEnum;
}
export declare class DeleteOrganizationalUnitRequest extends SpeakeasyBase {
    headers: DeleteOrganizationalUnitHeaders;
    request: shared.DeleteOrganizationalUnitRequest;
}
export declare class DeleteOrganizationalUnitResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidInputException?: any;
    organizationalUnitNotEmptyException?: any;
    organizationalUnitNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
