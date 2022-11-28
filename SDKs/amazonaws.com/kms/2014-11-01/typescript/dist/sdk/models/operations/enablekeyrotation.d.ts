import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableKeyRotationXAmzTargetEnum {
    TrentServiceEnableKeyRotation = "TrentService.EnableKeyRotation"
}
export declare class EnableKeyRotationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableKeyRotationXAmzTargetEnum;
}
export declare class EnableKeyRotationRequest extends SpeakeasyBase {
    headers: EnableKeyRotationHeaders;
    request: shared.EnableKeyRotationRequest;
}
export declare class EnableKeyRotationResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
