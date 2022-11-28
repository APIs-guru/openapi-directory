import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisassociateResourceShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateResourceShareRequestBody extends SpeakeasyBase {
    clientToken?: string;
    principals?: string[];
    resourceArns?: string[];
    resourceShareArn: string;
}
export declare class DisassociateResourceShareRequest extends SpeakeasyBase {
    headers: DisassociateResourceShareHeaders;
    request: DisassociateResourceShareRequestBody;
}
export declare class DisassociateResourceShareResponse extends SpeakeasyBase {
    contentType: string;
    disassociateResourceShareResponse?: shared.DisassociateResourceShareResponse;
    idempotentParameterMismatchException?: any;
    invalidClientTokenException?: any;
    invalidParameterException?: any;
    invalidStateTransitionException?: any;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    resourceShareLimitExceededException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
