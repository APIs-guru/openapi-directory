import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRecordsXAmzTargetEnum {
    Kinesis20131202PutRecords = "Kinesis_20131202.PutRecords"
}
export declare class PutRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordsXAmzTargetEnum;
}
export declare class PutRecordsRequest extends SpeakeasyBase {
    headers: PutRecordsHeaders;
    request: shared.PutRecordsInput;
}
export declare class PutRecordsResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    kmsAccessDeniedException?: any;
    kmsDisabledException?: any;
    kmsInvalidStateException?: any;
    kmsNotFoundException?: any;
    kmsOptInRequired?: any;
    kmsThrottlingException?: any;
    provisionedThroughputExceededException?: any;
    putRecordsOutput?: shared.PutRecordsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
