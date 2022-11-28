import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteResourceShareQueryParams extends SpeakeasyBase {
    clientToken?: string;
    resourceShareArn: string;
}
export declare class DeleteResourceShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourceShareRequest extends SpeakeasyBase {
    queryParams: DeleteResourceShareQueryParams;
    headers: DeleteResourceShareHeaders;
}
export declare class DeleteResourceShareResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourceShareResponse?: shared.DeleteResourceShareResponse;
    idempotentParameterMismatchException?: any;
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
