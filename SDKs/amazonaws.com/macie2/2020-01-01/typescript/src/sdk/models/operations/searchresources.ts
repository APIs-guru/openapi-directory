import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class SearchResourcesHeaders extends SpeakeasyBase {
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


// SearchResourcesRequestBodyBucketCriteria
/** 
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
**/
export class SearchResourcesRequestBodyBucketCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludes" })
  excludes?: shared.SearchResourcesCriteriaBlock;

  @Metadata({ data: "json, name=includes" })
  includes?: shared.SearchResourcesCriteriaBlock;
}


// SearchResourcesRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
**/
export class SearchResourcesRequestBodySortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: shared.SearchResourcesSortAttributeNameEnum;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class SearchResourcesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketCriteria" })
  bucketCriteria?: SearchResourcesRequestBodyBucketCriteria;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortCriteria" })
  sortCriteria?: SearchResourcesRequestBodySortCriteria;
}


export class SearchResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchResourcesQueryParams;

  @Metadata()
  headers: SearchResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SearchResourcesRequestBody;
}


export class SearchResourcesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  searchResourcesResponse?: shared.SearchResourcesResponse;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
