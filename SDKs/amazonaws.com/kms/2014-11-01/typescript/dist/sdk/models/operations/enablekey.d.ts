import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableKeyXAmzTargetEnum {
    TrentServiceEnableKey = "TrentService.EnableKey"
}
export declare class EnableKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableKeyXAmzTargetEnum;
}
export declare class EnableKeyRequest extends SpeakeasyBase {
    headers: EnableKeyHeaders;
    request: shared.EnableKeyRequest;
}
export declare class EnableKeyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
