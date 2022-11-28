import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableKeyXAmzTargetEnum {
    TrentServiceDisableKey = "TrentService.DisableKey"
}
export declare class DisableKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableKeyXAmzTargetEnum;
}
export declare class DisableKeyRequest extends SpeakeasyBase {
    headers: DisableKeyHeaders;
    request: shared.DisableKeyRequest;
}
export declare class DisableKeyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
}
