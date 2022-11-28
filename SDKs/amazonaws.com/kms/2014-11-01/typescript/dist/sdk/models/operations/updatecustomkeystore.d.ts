import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCustomKeyStoreXAmzTargetEnum {
    TrentServiceUpdateCustomKeyStore = "TrentService.UpdateCustomKeyStore"
}
export declare class UpdateCustomKeyStoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomKeyStoreXAmzTargetEnum;
}
export declare class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
    headers: UpdateCustomKeyStoreHeaders;
    request: shared.UpdateCustomKeyStoreRequest;
}
export declare class UpdateCustomKeyStoreResponse extends SpeakeasyBase {
    cloudHsmClusterInvalidConfigurationException?: any;
    cloudHsmClusterNotActiveException?: any;
    cloudHsmClusterNotFoundException?: any;
    cloudHsmClusterNotRelatedException?: any;
    contentType: string;
    customKeyStoreInvalidStateException?: any;
    customKeyStoreNameInUseException?: any;
    customKeyStoreNotFoundException?: any;
    kmsInternalException?: any;
    statusCode: number;
    updateCustomKeyStoreResponse?: Map<string, any>;
}
