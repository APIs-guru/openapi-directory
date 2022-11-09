import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListHumanLoopsSortOrderEnum {
    Ascending = "Ascending"
,    Descending = "Descending"
}


export class ListHumanLoopsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SortOrder" })
  sortOrder?: ListHumanLoopsSortOrderEnum;
}


export class ListHumanLoopsHeaders extends SpeakeasyBase {
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


export class ListHumanLoopsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListHumanLoopsQueryParams;

  @Metadata()
  headers: ListHumanLoopsHeaders;
}


export class ListHumanLoopsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listHumanLoopsResponse?: shared.ListHumanLoopsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
