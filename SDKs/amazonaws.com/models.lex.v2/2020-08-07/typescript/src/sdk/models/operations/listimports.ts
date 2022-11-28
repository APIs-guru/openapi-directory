import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListImportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListImportsHeaders extends SpeakeasyBase {
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


// ListImportsRequestBodySortBy
/** 
 * Provides information for sorting a list of imports.
**/
export class ListImportsRequestBodySortBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: shared.ImportSortAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListImportsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.ImportFilter })
  filters?: shared.ImportFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ListImportsRequestBodySortBy;
}


export class ListImportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListImportsQueryParams;

  @SpeakeasyMetadata()
  headers: ListImportsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListImportsRequestBody;
}


export class ListImportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listImportsResponse?: shared.ListImportsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
