import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListStreamsXAmzTargetEnum {
    DynamoDbStreams20120810ListStreams = "DynamoDBStreams_20120810.ListStreams"
}
export declare class ListStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStreamsXAmzTargetEnum;
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    headers: ListStreamsHeaders;
    request: shared.ListStreamsInput;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listStreamsOutput?: shared.ListStreamsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
