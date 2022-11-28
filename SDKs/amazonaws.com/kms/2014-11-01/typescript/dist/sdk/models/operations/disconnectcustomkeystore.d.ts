import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisconnectCustomKeyStoreXAmzTargetEnum {
    TrentServiceDisconnectCustomKeyStore = "TrentService.DisconnectCustomKeyStore"
}
export declare class DisconnectCustomKeyStoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisconnectCustomKeyStoreXAmzTargetEnum;
}
export declare class DisconnectCustomKeyStoreRequest extends SpeakeasyBase {
    headers: DisconnectCustomKeyStoreHeaders;
    request: shared.DisconnectCustomKeyStoreRequest;
}
export declare class DisconnectCustomKeyStoreResponse extends SpeakeasyBase {
    contentType: string;
    customKeyStoreInvalidStateException?: any;
    customKeyStoreNotFoundException?: any;
    disconnectCustomKeyStoreResponse?: Map<string, any>;
    kmsInternalException?: any;
    statusCode: number;
}
