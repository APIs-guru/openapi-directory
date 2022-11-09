import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListContactsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ContactListName" })
  contactListName: string;
}


export class ListContactsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListContactsHeaders extends SpeakeasyBase {
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


// ListContactsRequestBodyFilter
/** 
 * A filter that can be applied to a list of contacts.
**/
export class ListContactsRequestBodyFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilteredStatus" })
  filteredStatus?: shared.SubscriptionStatusEnum;

  @Metadata({ data: "json, name=TopicFilter" })
  topicFilter?: shared.TopicFilter;
}


export class ListContactsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: ListContactsRequestBodyFilter;
}


export class ListContactsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListContactsPathParams;

  @Metadata()
  queryParams: ListContactsQueryParams;

  @Metadata()
  headers: ListContactsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListContactsRequestBody;
}


export class ListContactsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  listContactsResponse?: shared.ListContactsResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
