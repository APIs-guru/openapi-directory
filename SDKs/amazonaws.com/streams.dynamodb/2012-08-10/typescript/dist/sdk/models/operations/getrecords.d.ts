import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRecordsXAmzTargetEnum {
    DynamoDbStreams20120810GetRecords = "DynamoDBStreams_20120810.GetRecords"
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
    internalServerError?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    trimmedDataAccessException?: any;
}
