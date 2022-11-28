import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamsQueryParams extends SpeakeasyBase {
    exclusiveStartStreamName?: string;
    limit?: string;
}
export declare enum ListStreamsXAmzTargetEnum {
    Kinesis20131202ListStreams = "Kinesis_20131202.ListStreams"
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
    queryParams: ListStreamsQueryParams;
    headers: ListStreamsHeaders;
    request: shared.ListStreamsInput;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededException?: any;
    listStreamsOutput?: shared.ListStreamsOutput;
    statusCode: number;
}
