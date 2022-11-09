import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListMailboxPermissionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMailboxPermissionsXAmzTargetEnum {
    WorkMailServiceListMailboxPermissions = "WorkMailService.ListMailboxPermissions"
}
export declare class ListMailboxPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMailboxPermissionsXAmzTargetEnum;
}
export declare class ListMailboxPermissionsRequest extends SpeakeasyBase {
    queryParams: ListMailboxPermissionsQueryParams;
    headers: ListMailboxPermissionsHeaders;
    request: shared.ListMailboxPermissionsRequest;
}
export declare class ListMailboxPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    listMailboxPermissionsResponse?: shared.ListMailboxPermissionsResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
