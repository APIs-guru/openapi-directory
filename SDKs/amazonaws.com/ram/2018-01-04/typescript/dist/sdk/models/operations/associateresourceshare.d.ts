import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssociateResourceShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateResourceShareRequestBody extends SpeakeasyBase {
    clientToken?: string;
    principals?: string[];
    resourceArns?: string[];
    resourceShareArn: string;
}
export declare class AssociateResourceShareRequest extends SpeakeasyBase {
    headers: AssociateResourceShareHeaders;
    request: AssociateResourceShareRequestBody;
}
export declare class AssociateResourceShareResponse extends SpeakeasyBase {
    associateResourceShareResponse?: shared.AssociateResourceShareResponse;
    contentType: string;
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
