import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListFindingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListFindingsHeaders extends SpeakeasyBase {
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


// ListFindingsRequestBodyFindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class ListFindingsRequestBodyFindingCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, shared.CriterionAdditionalProperties>;
}


// ListFindingsRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a request for findings.
**/
export class ListFindingsRequestBodySortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class ListFindingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingCriteria" })
  findingCriteria?: ListFindingsRequestBodyFindingCriteria;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortCriteria" })
  sortCriteria?: ListFindingsRequestBodySortCriteria;
}


export class ListFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListFindingsQueryParams;

  @SpeakeasyMetadata()
  headers: ListFindingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListFindingsRequestBody;
}


export class ListFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listFindingsResponse?: shared.ListFindingsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
