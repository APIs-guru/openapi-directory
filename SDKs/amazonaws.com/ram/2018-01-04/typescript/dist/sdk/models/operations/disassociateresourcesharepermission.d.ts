import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisassociateResourceSharePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateResourceSharePermissionRequestBody extends SpeakeasyBase {
    clientToken?: string;
    permissionArn: string;
    resourceShareArn: string;
}
export declare class DisassociateResourceSharePermissionRequest extends SpeakeasyBase {
    headers: DisassociateResourceSharePermissionHeaders;
    request: DisassociateResourceSharePermissionRequestBody;
}
export declare class DisassociateResourceSharePermissionResponse extends SpeakeasyBase {
    contentType: string;
    disassociateResourceSharePermissionResponse?: shared.DisassociateResourceSharePermissionResponse;
    invalidClientTokenException?: any;
    invalidParameterException?: any;
    invalidStateTransitionException?: any;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
