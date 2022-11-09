import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListStreamsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.
**/
export declare class ListStreamsRequestBodyStreamNameCondition extends SpeakeasyBase {
    comparisonOperator?: shared.ComparisonOperatorEnum;
    comparisonValue?: string;
}
export declare class ListStreamsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    streamNameCondition?: ListStreamsRequestBodyStreamNameCondition;
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    queryParams: ListStreamsQueryParams;
    headers: ListStreamsHeaders;
    request: ListStreamsRequestBody;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    listStreamsOutput?: shared.ListStreamsOutput;
    statusCode: number;
}
