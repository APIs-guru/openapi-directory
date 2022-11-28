import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetShardIteratorXAmzTargetEnum {
    DynamoDbStreams20120810GetShardIterator = "DynamoDBStreams_20120810.GetShardIterator"
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
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    trimmedDataAccessException?: any;
}
