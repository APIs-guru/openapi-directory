import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListBuiltInIntentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class ListBuiltInIntentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListBuiltInIntentsHeaders extends SpeakeasyBase {
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


// ListBuiltInIntentsRequestBodySortBy
/** 
 * Specifies attributes for sorting a list of built-in intents.
**/
export class ListBuiltInIntentsRequestBodySortBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: shared.BuiltInIntentSortAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListBuiltInIntentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ListBuiltInIntentsRequestBodySortBy;
}


export class ListBuiltInIntentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBuiltInIntentsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBuiltInIntentsQueryParams;

  @SpeakeasyMetadata()
  headers: ListBuiltInIntentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListBuiltInIntentsRequestBody;
}


export class ListBuiltInIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listBuiltInIntentsResponse?: shared.ListBuiltInIntentsResponse;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
