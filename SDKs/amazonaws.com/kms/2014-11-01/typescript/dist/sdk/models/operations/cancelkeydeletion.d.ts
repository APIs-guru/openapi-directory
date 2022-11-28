import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelKeyDeletionXAmzTargetEnum {
    TrentServiceCancelKeyDeletion = "TrentService.CancelKeyDeletion"
}
export declare class CancelKeyDeletionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelKeyDeletionXAmzTargetEnum;
}
export declare class CancelKeyDeletionRequest extends SpeakeasyBase {
    headers: CancelKeyDeletionHeaders;
    request: shared.CancelKeyDeletionRequest;
}
export declare class CancelKeyDeletionResponse extends SpeakeasyBase {
    cancelKeyDeletionResponse?: shared.CancelKeyDeletionResponse;
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
}
