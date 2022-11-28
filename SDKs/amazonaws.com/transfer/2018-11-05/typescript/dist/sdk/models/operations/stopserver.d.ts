import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopServerXAmzTargetEnum {
    TransferServiceStopServer = "TransferService.StopServer"
}
export declare class StopServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopServerXAmzTargetEnum;
}
export declare class StopServerRequest extends SpeakeasyBase {
    headers: StopServerHeaders;
    request: shared.StopServerRequest;
}
export declare class StopServerResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
