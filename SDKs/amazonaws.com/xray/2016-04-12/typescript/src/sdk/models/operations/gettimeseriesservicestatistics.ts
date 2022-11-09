import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTimeSeriesServiceStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetTimeSeriesServiceStatisticsHeaders extends SpeakeasyBase {
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


export class GetTimeSeriesServiceStatisticsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=EntitySelectorExpression" })
  entitySelectorExpression?: string;

  @Metadata({ data: "json, name=ForecastStatistics" })
  forecastStatistics?: boolean;

  @Metadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Period" })
  period?: number;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}


export class GetTimeSeriesServiceStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTimeSeriesServiceStatisticsQueryParams;

  @Metadata()
  headers: GetTimeSeriesServiceStatisticsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetTimeSeriesServiceStatisticsRequestBody;
}


export class GetTimeSeriesServiceStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTimeSeriesServiceStatisticsResult?: shared.GetTimeSeriesServiceStatisticsResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
