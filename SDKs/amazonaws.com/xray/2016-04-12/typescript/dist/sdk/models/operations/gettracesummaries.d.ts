import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTraceSummariesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetTraceSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The name and value of a sampling rule to apply to a trace summary.
**/
export declare class GetTraceSummariesRequestBodySamplingStrategy extends SpeakeasyBase {
    name?: shared.SamplingStrategyNameEnum;
    value?: number;
}
export declare enum GetTraceSummariesRequestBodyTimeRangeTypeEnum {
    TraceId = "TraceId",
    Event = "Event"
}
export declare class GetTraceSummariesRequestBody extends SpeakeasyBase {
    endTime: Date;
    filterExpression?: string;
    nextToken?: string;
    sampling?: boolean;
    samplingStrategy?: GetTraceSummariesRequestBodySamplingStrategy;
    startTime: Date;
    timeRangeType?: GetTraceSummariesRequestBodyTimeRangeTypeEnum;
}
export declare class GetTraceSummariesRequest extends SpeakeasyBase {
    queryParams: GetTraceSummariesQueryParams;
    headers: GetTraceSummariesHeaders;
    request: GetTraceSummariesRequestBody;
}
export declare class GetTraceSummariesResponse extends SpeakeasyBase {
    contentType: string;
    getTraceSummariesResult?: shared.GetTraceSummariesResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
