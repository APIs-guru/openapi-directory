import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListWorkteamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListWorkteamsXAmzTargetEnum {
    SageMakerListWorkteams = "SageMaker.ListWorkteams"
}


export class ListWorkteamsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListWorkteamsXAmzTargetEnum;
}


export class ListWorkteamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListWorkteamsQueryParams;

  @Metadata()
  headers: ListWorkteamsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListWorkteamsRequest;
}


export class ListWorkteamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkteamsResponse?: shared.ListWorkteamsResponse;

  @Metadata()
  statusCode: number;
}
