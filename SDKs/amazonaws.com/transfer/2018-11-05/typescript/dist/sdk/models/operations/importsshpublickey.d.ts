import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportSshPublicKeyXAmzTargetEnum {
    TransferServiceImportSshPublicKey = "TransferService.ImportSshPublicKey"
}
export declare class ImportSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportSshPublicKeyXAmzTargetEnum;
}
export declare class ImportSshPublicKeyRequest extends SpeakeasyBase {
    headers: ImportSshPublicKeyHeaders;
    request: shared.ImportSshPublicKeyRequest;
}
export declare class ImportSshPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    importSshPublicKeyResponse?: shared.ImportSshPublicKeyResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
