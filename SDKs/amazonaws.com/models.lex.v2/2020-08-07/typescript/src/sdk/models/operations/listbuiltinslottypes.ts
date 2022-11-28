import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListBuiltInSlotTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class ListBuiltInSlotTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListBuiltInSlotTypesHeaders extends SpeakeasyBase {
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


// ListBuiltInSlotTypesRequestBodySortBy
/** 
 * Specifies attributes for sorting a list of built-in slot types.
**/
export class ListBuiltInSlotTypesRequestBodySortBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: shared.BuiltInSlotTypeSortAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListBuiltInSlotTypesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ListBuiltInSlotTypesRequestBodySortBy;
}


export class ListBuiltInSlotTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBuiltInSlotTypesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBuiltInSlotTypesQueryParams;

  @SpeakeasyMetadata()
  headers: ListBuiltInSlotTypesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListBuiltInSlotTypesRequestBody;
}


export class ListBuiltInSlotTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listBuiltInSlotTypesResponse?: shared.ListBuiltInSlotTypesResponse;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
