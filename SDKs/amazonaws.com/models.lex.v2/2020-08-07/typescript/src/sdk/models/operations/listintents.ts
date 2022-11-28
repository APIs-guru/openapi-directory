import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListIntentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class ListIntentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListIntentsHeaders extends SpeakeasyBase {
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


// ListIntentsRequestBodySortBy
/** 
 * Specifies attributes for sorting a list of intents.
**/
export class ListIntentsRequestBodySortBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: shared.IntentSortAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListIntentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.IntentFilter })
  filters?: shared.IntentFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ListIntentsRequestBodySortBy;
}


export class ListIntentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListIntentsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListIntentsQueryParams;

  @SpeakeasyMetadata()
  headers: ListIntentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListIntentsRequestBody;
}


export class ListIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listIntentsResponse?: shared.ListIntentsResponse;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
