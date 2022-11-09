import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFlowDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListFlowDefinitionsXAmzTargetEnum {
    SageMakerListFlowDefinitions = "SageMaker.ListFlowDefinitions"
}


export class ListFlowDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListFlowDefinitionsXAmzTargetEnum;
}


export class ListFlowDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFlowDefinitionsQueryParams;

  @Metadata()
  headers: ListFlowDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListFlowDefinitionsRequest;
}


export class ListFlowDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFlowDefinitionsResponse?: shared.ListFlowDefinitionsResponse;

  @Metadata()
  statusCode: number;
}
