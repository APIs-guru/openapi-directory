import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutMailboxPermissionsXAmzTargetEnum {
    WorkMailServicePutMailboxPermissions = "WorkMailService.PutMailboxPermissions"
}
export declare class PutMailboxPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutMailboxPermissionsXAmzTargetEnum;
}
export declare class PutMailboxPermissionsRequest extends SpeakeasyBase {
    headers: PutMailboxPermissionsHeaders;
    request: shared.PutMailboxPermissionsRequest;
}
export declare class PutMailboxPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    putMailboxPermissionsResponse?: Map<string, any>;
    statusCode: number;
}
