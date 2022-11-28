import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOpsSummaryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetOpsSummaryXAmzTargetEnum {
    AmazonSsmGetOpsSummary = "AmazonSSM.GetOpsSummary"
}
export declare class GetOpsSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpsSummaryXAmzTargetEnum;
}
export declare class GetOpsSummaryRequest extends SpeakeasyBase {
    queryParams: GetOpsSummaryQueryParams;
    headers: GetOpsSummaryHeaders;
    request: shared.GetOpsSummaryRequest;
}
export declare class GetOpsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getOpsSummaryResult?: shared.GetOpsSummaryResult;
    internalServerError?: any;
    invalidAggregatorException?: any;
    invalidFilter?: any;
    invalidNextToken?: any;
    invalidTypeNameException?: any;
    resourceDataSyncNotFoundException?: any;
    statusCode: number;
}
