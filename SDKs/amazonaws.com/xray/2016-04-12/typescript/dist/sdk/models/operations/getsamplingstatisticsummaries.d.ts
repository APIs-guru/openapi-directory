import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSamplingStatisticSummariesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetSamplingStatisticSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSamplingStatisticSummariesRequestBody extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetSamplingStatisticSummariesRequest extends SpeakeasyBase {
    queryParams: GetSamplingStatisticSummariesQueryParams;
    headers: GetSamplingStatisticSummariesHeaders;
    request: GetSamplingStatisticSummariesRequestBody;
}
export declare class GetSamplingStatisticSummariesResponse extends SpeakeasyBase {
    contentType: string;
    getSamplingStatisticSummariesResult?: shared.GetSamplingStatisticSummariesResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
