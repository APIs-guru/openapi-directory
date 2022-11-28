import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateServerXAmzTargetEnum {
    TransferServiceUpdateServer = "TransferService.UpdateServer"
}
export declare class UpdateServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServerXAmzTargetEnum;
}
export declare class UpdateServerRequest extends SpeakeasyBase {
    headers: UpdateServerHeaders;
    request: shared.UpdateServerRequest;
}
export declare class UpdateServerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateServerResponse?: shared.UpdateServerResponse;
}
