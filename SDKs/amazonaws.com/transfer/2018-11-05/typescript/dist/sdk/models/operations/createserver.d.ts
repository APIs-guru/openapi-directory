import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateServerXAmzTargetEnum {
    TransferServiceCreateServer = "TransferService.CreateServer"
}
export declare class CreateServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServerXAmzTargetEnum;
}
export declare class CreateServerRequest extends SpeakeasyBase {
    headers: CreateServerHeaders;
    request: shared.CreateServerRequest;
}
export declare class CreateServerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createServerResponse?: shared.CreateServerResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
