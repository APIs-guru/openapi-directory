import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeJobsHeaders extends SpeakeasyBase {
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


// DescribeJobsRequestBodyFilters
/** 
 * Request to describe Job log filters.
**/
export class DescribeJobsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: string;

  @SpeakeasyMetadata({ data: "json, name=jobIDs" })
  jobIDs?: string[];

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: string;
}


export class DescribeJobsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters: DescribeJobsRequestBodyFilters;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class DescribeJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeJobsQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeJobsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DescribeJobsRequestBody;
}


export class DescribeJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeJobsResponse?: shared.DescribeJobsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
