import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListChangeSetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListChangeSetsHeaders extends SpeakeasyBase {
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


// ListChangeSetsRequestBodySort
/** 
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
export class ListChangeSetsRequestBodySort extends SpeakeasyBase {
  @Metadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: shared.SortOrderEnum;
}


export class ListChangeSetsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Catalog" })
  catalog: string;

  @Metadata({ data: "json, name=FilterList", elemType: shared.Filter })
  filterList?: shared.Filter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Sort" })
  sort?: ListChangeSetsRequestBodySort;
}


export class ListChangeSetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListChangeSetsQueryParams;

  @Metadata()
  headers: ListChangeSetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListChangeSetsRequestBody;
}


export class ListChangeSetsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  listChangeSetsResponse?: shared.ListChangeSetsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
