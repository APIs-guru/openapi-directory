import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSlotTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class ListSlotTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListSlotTypesHeaders extends SpeakeasyBase {
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


// ListSlotTypesRequestBodySortBy
/** 
 * Specifies attributes for sorting a list of slot types.
**/
export class ListSlotTypesRequestBodySortBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: shared.SlotTypeSortAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListSlotTypesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.SlotTypeFilter })
  filters?: shared.SlotTypeFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ListSlotTypesRequestBodySortBy;
}


export class ListSlotTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSlotTypesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSlotTypesQueryParams;

  @SpeakeasyMetadata()
  headers: ListSlotTypesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListSlotTypesRequestBody;
}


export class ListSlotTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listSlotTypesResponse?: shared.ListSlotTypesResponse;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
