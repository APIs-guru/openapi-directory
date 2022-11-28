import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class SearchResourcesHeaders extends SpeakeasyBase {
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


// SearchResourcesRequestBodyBucketCriteria
/** 
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
**/
export class SearchResourcesRequestBodyBucketCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: shared.SearchResourcesCriteriaBlock;

  @SpeakeasyMetadata({ data: "json, name=includes" })
  includes?: shared.SearchResourcesCriteriaBlock;
}


// SearchResourcesRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
**/
export class SearchResourcesRequestBodySortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: shared.SearchResourcesSortAttributeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class SearchResourcesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketCriteria" })
  bucketCriteria?: SearchResourcesRequestBodyBucketCriteria;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortCriteria" })
  sortCriteria?: SearchResourcesRequestBodySortCriteria;
}


export class SearchResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchResourcesQueryParams;

  @SpeakeasyMetadata()
  headers: SearchResourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SearchResourcesRequestBody;
}


export class SearchResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  searchResourcesResponse?: shared.SearchResourcesResponse;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
