import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteOrganizationXAmzTargetEnum {
    WorkMailServiceDeleteOrganization = "WorkMailService.DeleteOrganization"
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
    request: shared.DeleteOrganizationRequest;
}
export declare class DeleteOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    deleteOrganizationResponse?: shared.DeleteOrganizationResponse;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
