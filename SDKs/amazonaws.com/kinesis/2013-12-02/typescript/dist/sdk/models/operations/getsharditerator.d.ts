import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetShardIteratorXAmzTargetEnum {
    Kinesis20131202GetShardIterator = "Kinesis_20131202.GetShardIterator"
}
export declare class GetShardIteratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetShardIteratorXAmzTargetEnum;
}
export declare class GetShardIteratorRequest extends SpeakeasyBase {
    headers: GetShardIteratorHeaders;
    request: shared.GetShardIteratorInput;
}
export declare class GetShardIteratorResponse extends SpeakeasyBase {
    contentType: string;
    getShardIteratorOutput?: shared.GetShardIteratorOutput;
    invalidArgumentException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
