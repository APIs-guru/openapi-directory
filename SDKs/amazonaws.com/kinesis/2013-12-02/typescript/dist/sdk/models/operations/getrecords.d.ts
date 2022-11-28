import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRecordsXAmzTargetEnum {
    Kinesis20131202GetRecords = "Kinesis_20131202.GetRecords"
}
export declare class GetRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRecordsXAmzTargetEnum;
}
export declare class GetRecordsRequest extends SpeakeasyBase {
    headers: GetRecordsHeaders;
    request: shared.GetRecordsInput;
}
export declare class GetRecordsResponse extends SpeakeasyBase {
    contentType: string;
    expiredIteratorException?: any;
    getRecordsOutput?: shared.GetRecordsOutput;
    invalidArgumentException?: any;
    kmsAccessDeniedException?: any;
    kmsDisabledException?: any;
    kmsInvalidStateException?: any;
    kmsNotFoundException?: any;
    kmsOptInRequired?: any;
    kmsThrottlingException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
