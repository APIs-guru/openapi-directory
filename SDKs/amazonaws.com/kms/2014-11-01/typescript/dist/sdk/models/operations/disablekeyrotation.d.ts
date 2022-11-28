import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableKeyRotationXAmzTargetEnum {
    TrentServiceDisableKeyRotation = "TrentService.DisableKeyRotation"
}
export declare class DisableKeyRotationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableKeyRotationXAmzTargetEnum;
}
export declare class DisableKeyRotationRequest extends SpeakeasyBase {
    headers: DisableKeyRotationHeaders;
    request: shared.DisableKeyRotationRequest;
}
export declare class DisableKeyRotationResponse extends SpeakeasyBase {
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
