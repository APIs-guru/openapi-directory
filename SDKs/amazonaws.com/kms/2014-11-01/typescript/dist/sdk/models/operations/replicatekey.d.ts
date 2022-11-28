import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReplicateKeyXAmzTargetEnum {
    TrentServiceReplicateKey = "TrentService.ReplicateKey"
}
export declare class ReplicateKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReplicateKeyXAmzTargetEnum;
}
export declare class ReplicateKeyRequest extends SpeakeasyBase {
    headers: ReplicateKeyHeaders;
    request: shared.ReplicateKeyRequest;
}
export declare class ReplicateKeyResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    disabledException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    limitExceededException?: any;
    malformedPolicyDocumentException?: any;
    notFoundException?: any;
    replicateKeyResponse?: shared.ReplicateKeyResponse;
    statusCode: number;
    tagException?: any;
    unsupportedOperationException?: any;
}
