import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateOrganizationXAmzTargetEnum {
    WorkMailServiceCreateOrganization = "WorkMailService.CreateOrganization"
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
    contentType: string;
    createOrganizationResponse?: shared.CreateOrganizationResponse;
    directoryInUseException?: any;
    directoryUnavailableException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    nameAvailabilityException?: any;
    statusCode: number;
}
