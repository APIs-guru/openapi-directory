import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteMailboxPermissionsXAmzTargetEnum {
    WorkMailServiceDeleteMailboxPermissions = "WorkMailService.DeleteMailboxPermissions"
}
export declare class DeleteMailboxPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMailboxPermissionsXAmzTargetEnum;
}
export declare class DeleteMailboxPermissionsRequest extends SpeakeasyBase {
    headers: DeleteMailboxPermissionsHeaders;
    request: shared.DeleteMailboxPermissionsRequest;
}
export declare class DeleteMailboxPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    deleteMailboxPermissionsResponse?: Map<string, any>;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
