import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListExportsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListExportsHeaders extends SpeakeasyBase {
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


// ListExportsRequestBodySortBy
/** 
 * Provides information about sorting a list of exports.
**/
export class ListExportsRequestBodySortBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: shared.ExportSortAttributeEnum;

  @Metadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListExportsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=filters", elemType: shared.ExportFilter })
  filters?: shared.ExportFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ListExportsRequestBodySortBy;
}


export class ListExportsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListExportsQueryParams;

  @Metadata()
  headers: ListExportsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListExportsRequestBody;
}


export class ListExportsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listExportsResponse?: shared.ListExportsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
