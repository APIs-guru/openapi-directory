import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeSourceServersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeSourceServersHeaders extends SpeakeasyBase {
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


// DescribeSourceServersRequestBodyFilters
/** 
 * Request to filter Source Servers list.
**/
export class DescribeSourceServersRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceServerIDs" })
  sourceServerIDs?: string[];
}


export class DescribeSourceServersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters: DescribeSourceServersRequestBodyFilters;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class DescribeSourceServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeSourceServersQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeSourceServersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DescribeSourceServersRequestBody;
}


export class DescribeSourceServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeSourceServersResponse?: shared.DescribeSourceServersResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
