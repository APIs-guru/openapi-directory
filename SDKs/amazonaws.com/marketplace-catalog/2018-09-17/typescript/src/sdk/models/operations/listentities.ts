import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEntitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListEntitiesHeaders extends SpeakeasyBase {
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


// ListEntitiesRequestBodySort
/** 
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
export class ListEntitiesRequestBodySort extends SpeakeasyBase {
  @Metadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: shared.SortOrderEnum;
}


export class ListEntitiesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Catalog" })
  catalog: string;

  @Metadata({ data: "json, name=EntityType" })
  entityType: string;

  @Metadata({ data: "json, name=FilterList", elemType: shared.Filter })
  filterList?: shared.Filter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Sort" })
  sort?: ListEntitiesRequestBodySort;
}


export class ListEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEntitiesQueryParams;

  @Metadata()
  headers: ListEntitiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListEntitiesRequestBody;
}


export class ListEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  listEntitiesResponse?: shared.ListEntitiesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
