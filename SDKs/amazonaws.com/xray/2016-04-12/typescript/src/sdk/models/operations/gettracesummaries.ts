import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTraceSummariesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetTraceSummariesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// GetTraceSummariesRequestBodySamplingStrategy
/** 
 * The name and value of a sampling rule to apply to a trace summary.
**/
export class GetTraceSummariesRequestBodySamplingStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: shared.SamplingStrategyNameEnum;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}

export enum GetTraceSummariesRequestBodyTimeRangeTypeEnum {
    TraceId = "TraceId"
,    Event = "Event"
}


export class GetTraceSummariesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Sampling" })
  sampling?: boolean;

  @Metadata({ data: "json, name=SamplingStrategy" })
  samplingStrategy?: GetTraceSummariesRequestBodySamplingStrategy;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;

  @Metadata({ data: "json, name=TimeRangeType" })
  timeRangeType?: GetTraceSummariesRequestBodyTimeRangeTypeEnum;
}


export class GetTraceSummariesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTraceSummariesQueryParams;

  @Metadata()
  headers: GetTraceSummariesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetTraceSummariesRequestBody;
}


export class GetTraceSummariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTraceSummariesResult?: shared.GetTraceSummariesResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
