import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateResourceShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateResourceShareRequestBody extends SpeakeasyBase {
    allowExternalPrincipals?: boolean;
    clientToken?: string;
    name: string;
    permissionArns?: string[];
    principals?: string[];
    resourceArns?: string[];
    tags?: shared.Tag[];
}
export declare class CreateResourceShareRequest extends SpeakeasyBase {
    headers: CreateResourceShareHeaders;
    request: CreateResourceShareRequestBody;
}
export declare class CreateResourceShareResponse extends SpeakeasyBase {
    contentType: string;
    createResourceShareResponse?: shared.CreateResourceShareResponse;
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
    tagPolicyViolationException?: any;
    unknownResourceException?: any;
}
