import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeBucketsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeBucketsHeaders extends SpeakeasyBase {
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


// DescribeBucketsRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a query for information about S3 buckets.
**/
export class DescribeBucketsRequestBodySortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class DescribeBucketsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteria", elemType: shared.BucketCriteriaAdditionalProperties })
  criteria?: Map<string, shared.BucketCriteriaAdditionalProperties>;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortCriteria" })
  sortCriteria?: DescribeBucketsRequestBodySortCriteria;
}


export class DescribeBucketsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeBucketsQueryParams;

  @Metadata()
  headers: DescribeBucketsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeBucketsRequestBody;
}


export class DescribeBucketsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeBucketsResponse?: shared.DescribeBucketsResponse;

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
