import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListClassificationJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListClassificationJobsHeaders extends SpeakeasyBase {
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


// ListClassificationJobsRequestBodyFilterCriteria
/** 
 * Specifies criteria for filtering the results of a request for information about classification jobs.
**/
export class ListClassificationJobsRequestBodyFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludes", elemType: shared.ListJobsFilterTerm })
  excludes?: shared.ListJobsFilterTerm[];

  @SpeakeasyMetadata({ data: "json, name=includes", elemType: shared.ListJobsFilterTerm })
  includes?: shared.ListJobsFilterTerm[];
}


// ListClassificationJobsRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a request for information about classification jobs.
**/
export class ListClassificationJobsRequestBodySortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: shared.ListJobsSortAttributeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class ListClassificationJobsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: ListClassificationJobsRequestBodyFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortCriteria" })
  sortCriteria?: ListClassificationJobsRequestBodySortCriteria;
}


export class ListClassificationJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListClassificationJobsQueryParams;

  @SpeakeasyMetadata()
  headers: ListClassificationJobsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListClassificationJobsRequestBody;
}


export class ListClassificationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listClassificationJobsResponse?: shared.ListClassificationJobsResponse;

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
