import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutKeyPolicyXAmzTargetEnum {
    TrentServicePutKeyPolicy = "TrentService.PutKeyPolicy"
}
export declare class PutKeyPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutKeyPolicyXAmzTargetEnum;
}
export declare class PutKeyPolicyRequest extends SpeakeasyBase {
    headers: PutKeyPolicyHeaders;
    request: shared.PutKeyPolicyRequest;
}
export declare class PutKeyPolicyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    limitExceededException?: any;
    malformedPolicyDocumentException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
