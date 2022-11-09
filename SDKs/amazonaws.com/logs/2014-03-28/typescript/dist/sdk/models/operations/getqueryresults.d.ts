import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetQueryResultsXAmzTargetEnum {
    Logs20140328GetQueryResults = "Logs_20140328.GetQueryResults"
}
export declare class GetQueryResultsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQueryResultsXAmzTargetEnum;
}
export declare class GetQueryResultsRequest extends SpeakeasyBase {
    headers: GetQueryResultsHeaders;
    request: shared.GetQueryResultsRequest;
}
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    contentType: string;
    getQueryResultsResponse?: shared.GetQueryResultsResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
