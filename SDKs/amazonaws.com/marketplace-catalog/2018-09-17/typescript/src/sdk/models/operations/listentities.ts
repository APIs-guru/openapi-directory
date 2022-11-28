import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListEntitiesHeaders extends SpeakeasyBase {
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


// ListEntitiesRequestBodySort
/** 
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
export class ListEntitiesRequestBodySort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: shared.SortOrderEnum;
}


export class ListEntitiesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Catalog" })
  catalog: string;

  @SpeakeasyMetadata({ data: "json, name=EntityType" })
  entityType: string;

  @SpeakeasyMetadata({ data: "json, name=FilterList", elemType: shared.Filter })
  filterList?: shared.Filter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Sort" })
  sort?: ListEntitiesRequestBodySort;
}


export class ListEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListEntitiesQueryParams;

  @SpeakeasyMetadata()
  headers: ListEntitiesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListEntitiesRequestBody;
}


export class ListEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  listEntitiesResponse?: shared.ListEntitiesResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
