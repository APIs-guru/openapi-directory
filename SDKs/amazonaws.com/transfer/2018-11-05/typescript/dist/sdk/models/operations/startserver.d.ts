import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartServerXAmzTargetEnum {
    TransferServiceStartServer = "TransferService.StartServer"
}
export declare class StartServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartServerXAmzTargetEnum;
}
export declare class StartServerRequest extends SpeakeasyBase {
    headers: StartServerHeaders;
    request: shared.StartServerRequest;
}
export declare class StartServerResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
