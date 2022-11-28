import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAvailableManagementCidrRangesXAmzTargetEnum {
    WorkspacesServiceListAvailableManagementCidrRanges = "WorkspacesService.ListAvailableManagementCidrRanges"
}
export declare class ListAvailableManagementCidrRangesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAvailableManagementCidrRangesXAmzTargetEnum;
}
export declare class ListAvailableManagementCidrRangesRequest extends SpeakeasyBase {
    headers: ListAvailableManagementCidrRangesHeaders;
    request: shared.ListAvailableManagementCidrRangesRequest;
}
export declare class ListAvailableManagementCidrRangesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    listAvailableManagementCidrRangesResult?: shared.ListAvailableManagementCidrRangesResult;
    statusCode: number;
}
