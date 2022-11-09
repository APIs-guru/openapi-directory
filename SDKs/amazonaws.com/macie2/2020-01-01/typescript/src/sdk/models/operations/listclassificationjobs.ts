import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListClassificationJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListClassificationJobsHeaders extends SpeakeasyBase {
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


// ListClassificationJobsRequestBodyFilterCriteria
/** 
 * Specifies criteria for filtering the results of a request for information about classification jobs.
**/
export class ListClassificationJobsRequestBodyFilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludes", elemType: shared.ListJobsFilterTerm })
  excludes?: shared.ListJobsFilterTerm[];

  @Metadata({ data: "json, name=includes", elemType: shared.ListJobsFilterTerm })
  includes?: shared.ListJobsFilterTerm[];
}


// ListClassificationJobsRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a request for information about classification jobs.
**/
export class ListClassificationJobsRequestBodySortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: shared.ListJobsSortAttributeNameEnum;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class ListClassificationJobsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: ListClassificationJobsRequestBodyFilterCriteria;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortCriteria" })
  sortCriteria?: ListClassificationJobsRequestBodySortCriteria;
}


export class ListClassificationJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListClassificationJobsQueryParams;

  @Metadata()
  headers: ListClassificationJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListClassificationJobsRequestBody;
}


export class ListClassificationJobsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listClassificationJobsResponse?: shared.ListClassificationJobsResponse;

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
