import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBotVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class ListBotVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListBotVersionsHeaders extends SpeakeasyBase {
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


// ListBotVersionsRequestBodySortBy
/** 
 * Specifies attributes for sorting a list of bot versions.
**/
export class ListBotVersionsRequestBodySortBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: shared.BotVersionSortAttributeEnum;

  @Metadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListBotVersionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ListBotVersionsRequestBodySortBy;
}


export class ListBotVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListBotVersionsPathParams;

  @Metadata()
  queryParams: ListBotVersionsQueryParams;

  @Metadata()
  headers: ListBotVersionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListBotVersionsRequestBody;
}


export class ListBotVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listBotVersionsResponse?: shared.ListBotVersionsResponse;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
