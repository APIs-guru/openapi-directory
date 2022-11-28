import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopStreamEncryptionXAmzTargetEnum {
    Kinesis20131202StopStreamEncryption = "Kinesis_20131202.StopStreamEncryption"
}
export declare class StopStreamEncryptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopStreamEncryptionXAmzTargetEnum;
}
export declare class StopStreamEncryptionRequest extends SpeakeasyBase {
    headers: StopStreamEncryptionHeaders;
    request: shared.StopStreamEncryptionInput;
}
export declare class StopStreamEncryptionResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
