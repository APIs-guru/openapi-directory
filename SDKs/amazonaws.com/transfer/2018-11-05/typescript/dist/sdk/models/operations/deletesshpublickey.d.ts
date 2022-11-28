import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSshPublicKeyXAmzTargetEnum {
    TransferServiceDeleteSshPublicKey = "TransferService.DeleteSshPublicKey"
}
export declare class DeleteSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSshPublicKeyXAmzTargetEnum;
}
export declare class DeleteSshPublicKeyRequest extends SpeakeasyBase {
    headers: DeleteSshPublicKeyHeaders;
    request: shared.DeleteSshPublicKeyRequest;
}
export declare class DeleteSshPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
