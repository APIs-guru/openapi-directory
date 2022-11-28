import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateResourceShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateResourceShareRequestBody extends SpeakeasyBase {
    allowExternalPrincipals?: boolean;
    clientToken?: string;
    name?: string;
    resourceShareArn: string;
}
export declare class UpdateResourceShareRequest extends SpeakeasyBase {
    headers: UpdateResourceShareHeaders;
    request: UpdateResourceShareRequestBody;
}
export declare class UpdateResourceShareResponse extends SpeakeasyBase {
    contentType: string;
    idempotentParameterMismatchException?: any;
    invalidClientTokenException?: any;
    invalidParameterException?: any;
    malformedArnException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
    updateResourceShareResponse?: shared.UpdateResourceShareResponse;
}
