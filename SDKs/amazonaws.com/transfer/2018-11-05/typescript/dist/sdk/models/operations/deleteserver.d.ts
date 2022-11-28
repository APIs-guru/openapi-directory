import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteServerXAmzTargetEnum {
    TransferServiceDeleteServer = "TransferService.DeleteServer"
}
export declare class DeleteServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServerXAmzTargetEnum;
}
export declare class DeleteServerRequest extends SpeakeasyBase {
    headers: DeleteServerHeaders;
    request: shared.DeleteServerRequest;
}
export declare class DeleteServerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
