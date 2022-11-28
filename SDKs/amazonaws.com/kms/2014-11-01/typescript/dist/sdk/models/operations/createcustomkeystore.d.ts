import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCustomKeyStoreXAmzTargetEnum {
    TrentServiceCreateCustomKeyStore = "TrentService.CreateCustomKeyStore"
}
export declare class CreateCustomKeyStoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomKeyStoreXAmzTargetEnum;
}
export declare class CreateCustomKeyStoreRequest extends SpeakeasyBase {
    headers: CreateCustomKeyStoreHeaders;
    request: shared.CreateCustomKeyStoreRequest;
}
export declare class CreateCustomKeyStoreResponse extends SpeakeasyBase {
    cloudHsmClusterInUseException?: any;
    cloudHsmClusterInvalidConfigurationException?: any;
    cloudHsmClusterNotActiveException?: any;
    cloudHsmClusterNotFoundException?: any;
    contentType: string;
    createCustomKeyStoreResponse?: shared.CreateCustomKeyStoreResponse;
    customKeyStoreNameInUseException?: any;
    incorrectTrustAnchorException?: any;
    kmsInternalException?: any;
    statusCode: number;
}
