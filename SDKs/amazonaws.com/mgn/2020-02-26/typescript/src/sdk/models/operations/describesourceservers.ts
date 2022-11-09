import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSourceServersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeSourceServersHeaders extends SpeakeasyBase {
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


// DescribeSourceServersRequestBodyFilters
/** 
 * Request to filter Source Servers list.
**/
export class DescribeSourceServersRequestBodyFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=isArchived" })
  isArchived?: boolean;

  @Metadata({ data: "json, name=sourceServerIDs" })
  sourceServerIDs?: string[];
}


export class DescribeSourceServersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters" })
  filters: DescribeSourceServersRequestBodyFilters;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class DescribeSourceServersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeSourceServersQueryParams;

  @Metadata()
  headers: DescribeSourceServersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeSourceServersRequestBody;
}


export class DescribeSourceServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSourceServersResponse?: shared.DescribeSourceServersResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
