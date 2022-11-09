import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPipelinesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListPipelinesXAmzTargetEnum {
    SageMakerListPipelines = "SageMaker.ListPipelines"
}


export class ListPipelinesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPipelinesXAmzTargetEnum;
}


export class ListPipelinesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPipelinesQueryParams;

  @Metadata()
  headers: ListPipelinesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListPipelinesRequest;
}


export class ListPipelinesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPipelinesResponse?: shared.ListPipelinesResponse;

  @Metadata()
  statusCode: number;
}
