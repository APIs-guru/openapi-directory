import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListChangeSetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListChangeSetsHeaders extends SpeakeasyBase {
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


// ListChangeSetsRequestBodySort
/** 
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
export class ListChangeSetsRequestBodySort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: shared.SortOrderEnum;
}


export class ListChangeSetsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Catalog" })
  catalog: string;

  @SpeakeasyMetadata({ data: "json, name=FilterList", elemType: shared.Filter })
  filterList?: shared.Filter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Sort" })
  sort?: ListChangeSetsRequestBodySort;
}


export class ListChangeSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListChangeSetsQueryParams;

  @SpeakeasyMetadata()
  headers: ListChangeSetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListChangeSetsRequestBody;
}


export class ListChangeSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  listChangeSetsResponse?: shared.ListChangeSetsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
