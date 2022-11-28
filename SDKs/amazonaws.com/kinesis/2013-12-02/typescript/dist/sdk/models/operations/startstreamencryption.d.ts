import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartStreamEncryptionXAmzTargetEnum {
    Kinesis20131202StartStreamEncryption = "Kinesis_20131202.StartStreamEncryption"
}
export declare class StartStreamEncryptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartStreamEncryptionXAmzTargetEnum;
}
export declare class StartStreamEncryptionRequest extends SpeakeasyBase {
    headers: StartStreamEncryptionHeaders;
    request: shared.StartStreamEncryptionInput;
}
export declare class StartStreamEncryptionResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    kmsAccessDeniedException?: any;
    kmsDisabledException?: any;
    kmsInvalidStateException?: any;
    kmsNotFoundException?: any;
    kmsOptInRequired?: any;
    kmsThrottlingException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
