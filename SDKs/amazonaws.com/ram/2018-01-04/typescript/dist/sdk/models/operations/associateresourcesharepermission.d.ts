import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssociateResourceSharePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateResourceSharePermissionRequestBody extends SpeakeasyBase {
    clientToken?: string;
    permissionArn: string;
    permissionVersion?: number;
    replace?: boolean;
    resourceShareArn: string;
}
export declare class AssociateResourceSharePermissionRequest extends SpeakeasyBase {
    headers: AssociateResourceSharePermissionHeaders;
    request: AssociateResourceSharePermissionRequestBody;
}
export declare class AssociateResourceSharePermissionResponse extends SpeakeasyBase {
    associateResourceSharePermissionResponse?: shared.AssociateResourceSharePermissionResponse;
    contentType: string;
    invalidClientTokenException?: any;
    invalidParameterException?: any;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
