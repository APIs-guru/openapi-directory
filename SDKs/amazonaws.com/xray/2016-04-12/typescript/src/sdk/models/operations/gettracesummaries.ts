import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTraceSummariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetTraceSummariesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// GetTraceSummariesRequestBodySamplingStrategy
/** 
 * The name and value of a sampling rule to apply to a trace summary.
**/
export class GetTraceSummariesRequestBodySamplingStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: shared.SamplingStrategyNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}

export enum GetTraceSummariesRequestBodyTimeRangeTypeEnum {
    TraceId = "TraceId",
    Event = "Event"
}


export class GetTraceSummariesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Sampling" })
  sampling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SamplingStrategy" })
  samplingStrategy?: GetTraceSummariesRequestBodySamplingStrategy;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=TimeRangeType" })
  timeRangeType?: GetTraceSummariesRequestBodyTimeRangeTypeEnum;
}


export class GetTraceSummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTraceSummariesQueryParams;

  @SpeakeasyMetadata()
  headers: GetTraceSummariesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetTraceSummariesRequestBody;
}


export class GetTraceSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTraceSummariesResult?: shared.GetTraceSummariesResult;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttledException?: any;
}
