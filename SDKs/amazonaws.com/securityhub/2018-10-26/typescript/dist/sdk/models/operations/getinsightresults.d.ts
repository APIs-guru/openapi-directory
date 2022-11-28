import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInsightResultsPathParams extends SpeakeasyBase {
    insightArn: string;
}
export declare class GetInsightResultsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightResultsRequest extends SpeakeasyBase {
    pathParams: GetInsightResultsPathParams;
    headers: GetInsightResultsHeaders;
}
export declare class GetInsightResultsResponse extends SpeakeasyBase {
    contentType: string;
    getInsightResultsResponse?: shared.GetInsightResultsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
