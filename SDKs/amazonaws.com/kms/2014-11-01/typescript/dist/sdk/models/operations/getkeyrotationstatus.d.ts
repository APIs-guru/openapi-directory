import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetKeyRotationStatusXAmzTargetEnum {
    TrentServiceGetKeyRotationStatus = "TrentService.GetKeyRotationStatus"
}
export declare class GetKeyRotationStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetKeyRotationStatusXAmzTargetEnum;
}
export declare class GetKeyRotationStatusRequest extends SpeakeasyBase {
    headers: GetKeyRotationStatusHeaders;
    request: shared.GetKeyRotationStatusRequest;
}
export declare class GetKeyRotationStatusResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    getKeyRotationStatusResponse?: shared.GetKeyRotationStatusResponse;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
