import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeJobsHeaders extends SpeakeasyBase {
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


// DescribeJobsRequestBodyFilters
/** 
 * Request to describe Job log filters.
**/
export class DescribeJobsRequestBodyFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromDate" })
  fromDate?: string;

  @Metadata({ data: "json, name=jobIDs" })
  jobIDs?: string[];

  @Metadata({ data: "json, name=toDate" })
  toDate?: string;
}


export class DescribeJobsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters" })
  filters: DescribeJobsRequestBodyFilters;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class DescribeJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeJobsQueryParams;

  @Metadata()
  headers: DescribeJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeJobsRequestBody;
}


export class DescribeJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeJobsResponse?: shared.DescribeJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
