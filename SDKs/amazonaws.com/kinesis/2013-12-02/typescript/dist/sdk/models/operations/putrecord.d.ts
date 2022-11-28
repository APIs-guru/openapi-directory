import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRecordXAmzTargetEnum {
    Kinesis20131202PutRecord = "Kinesis_20131202.PutRecord"
}
export declare class PutRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordXAmzTargetEnum;
}
export declare class PutRecordRequest extends SpeakeasyBase {
    headers: PutRecordHeaders;
    request: shared.PutRecordInput;
}
export declare class PutRecordResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    kmsAccessDeniedException?: any;
    kmsDisabledException?: any;
    kmsInvalidStateException?: any;
    kmsNotFoundException?: any;
    kmsOptInRequired?: any;
    kmsThrottlingException?: any;
    provisionedThroughputExceededException?: any;
    putRecordOutput?: shared.PutRecordOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
