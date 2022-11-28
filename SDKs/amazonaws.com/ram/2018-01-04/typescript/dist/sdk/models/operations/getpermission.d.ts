import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPermissionRequestBody extends SpeakeasyBase {
    permissionArn: string;
    permissionVersion?: number;
}
export declare class GetPermissionRequest extends SpeakeasyBase {
    headers: GetPermissionHeaders;
    request: GetPermissionRequestBody;
}
export declare class GetPermissionResponse extends SpeakeasyBase {
    contentType: string;
    getPermissionResponse?: shared.GetPermissionResponse;
    invalidParameterException?: any;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
