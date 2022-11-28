import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsageStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetUsageStatisticsHeaders extends SpeakeasyBase {
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


// GetUsageStatisticsRequestBodySortBy
/** 
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
**/
export class GetUsageStatisticsRequestBodySortBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: shared.UsageStatisticsSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}

export enum GetUsageStatisticsRequestBodyTimeRangeEnum {
    MonthToDate = "MONTH_TO_DATE",
    Past30Days = "PAST_30_DAYS"
}


export class GetUsageStatisticsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterBy", elemType: shared.UsageStatisticsFilter })
  filterBy?: shared.UsageStatisticsFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: GetUsageStatisticsRequestBodySortBy;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: GetUsageStatisticsRequestBodyTimeRangeEnum;
}


export class GetUsageStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsageStatisticsQueryParams;

  @SpeakeasyMetadata()
  headers: GetUsageStatisticsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetUsageStatisticsRequestBody;
}


export class GetUsageStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUsageStatisticsResponse?: shared.GetUsageStatisticsResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
