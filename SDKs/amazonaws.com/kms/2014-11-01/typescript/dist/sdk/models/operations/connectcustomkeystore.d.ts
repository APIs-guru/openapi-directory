import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConnectCustomKeyStoreXAmzTargetEnum {
    TrentServiceConnectCustomKeyStore = "TrentService.ConnectCustomKeyStore"
}
export declare class ConnectCustomKeyStoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConnectCustomKeyStoreXAmzTargetEnum;
}
export declare class ConnectCustomKeyStoreRequest extends SpeakeasyBase {
    headers: ConnectCustomKeyStoreHeaders;
    request: shared.ConnectCustomKeyStoreRequest;
}
export declare class ConnectCustomKeyStoreResponse extends SpeakeasyBase {
    cloudHsmClusterInvalidConfigurationException?: any;
    cloudHsmClusterNotActiveException?: any;
    connectCustomKeyStoreResponse?: Map<string, any>;
    contentType: string;
    customKeyStoreInvalidStateException?: any;
    customKeyStoreNotFoundException?: any;
    kmsInternalException?: any;
    statusCode: number;
}
