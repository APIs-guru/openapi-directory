import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListBotsHeaders extends SpeakeasyBase {
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


// ListBotsRequestBodySortBy
/** 
 * Specifies attributes for sorting a list of bots.
**/
export class ListBotsRequestBodySortBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: shared.BotSortAttributeEnum;

  @Metadata({ data: "json, name=order" })
  order?: shared.SortOrderEnum;
}


export class ListBotsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.BotFilter })
  filters?: shared.BotFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ListBotsRequestBodySortBy;
}


export class ListBotsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListBotsQueryParams;

  @Metadata()
  headers: ListBotsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListBotsRequestBody;
}


export class ListBotsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listBotsResponse?: shared.ListBotsResponse;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
