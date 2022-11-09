import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBuiltInSlotTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class ListBuiltInSlotTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListBuiltInSlotTypesHeaders extends SpeakeasyBase {
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


// ListBuiltInSlotTypesRequestBodySortBy
/** 
 * Specifies attributes for sorting a list of built-in slot types.
**/
export class ListBuiltInSlotTypesRequestBodySortBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: shared.BuiltInSlotTypeSortAttributeEnum;

  @Metadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListBuiltInSlotTypesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ListBuiltInSlotTypesRequestBodySortBy;
}


export class ListBuiltInSlotTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListBuiltInSlotTypesPathParams;

  @Metadata()
  queryParams: ListBuiltInSlotTypesQueryParams;

  @Metadata()
  headers: ListBuiltInSlotTypesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListBuiltInSlotTypesRequestBody;
}


export class ListBuiltInSlotTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listBuiltInSlotTypesResponse?: shared.ListBuiltInSlotTypesResponse;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
