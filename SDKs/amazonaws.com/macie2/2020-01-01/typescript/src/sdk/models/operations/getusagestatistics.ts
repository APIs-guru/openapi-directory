import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsageStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetUsageStatisticsHeaders extends SpeakeasyBase {
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


// GetUsageStatisticsRequestBodySortBy
/** 
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
**/
export class GetUsageStatisticsRequestBodySortBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: shared.UsageStatisticsSortKeyEnum;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}

export enum GetUsageStatisticsRequestBodyTimeRangeEnum {
    MonthToDate = "MONTH_TO_DATE"
,    Past30Days = "PAST_30_DAYS"
}


export class GetUsageStatisticsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterBy", elemType: shared.UsageStatisticsFilter })
  filterBy?: shared.UsageStatisticsFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: GetUsageStatisticsRequestBodySortBy;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: GetUsageStatisticsRequestBodyTimeRangeEnum;
}


export class GetUsageStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsageStatisticsQueryParams;

  @Metadata()
  headers: GetUsageStatisticsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetUsageStatisticsRequestBody;
}


export class GetUsageStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getUsageStatisticsResponse?: shared.GetUsageStatisticsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
