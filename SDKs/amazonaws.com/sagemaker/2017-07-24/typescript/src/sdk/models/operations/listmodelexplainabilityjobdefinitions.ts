import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListModelExplainabilityJobDefinitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListModelExplainabilityJobDefinitionsXAmzTargetEnum {
    SageMakerListModelExplainabilityJobDefinitions = "SageMaker.ListModelExplainabilityJobDefinitions"
}


export class ListModelExplainabilityJobDefinitionsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListModelExplainabilityJobDefinitionsXAmzTargetEnum;
}


export class ListModelExplainabilityJobDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListModelExplainabilityJobDefinitionsQueryParams;

  @SpeakeasyMetadata()
  headers: ListModelExplainabilityJobDefinitionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListModelExplainabilityJobDefinitionsRequest;
}


export class ListModelExplainabilityJobDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listModelExplainabilityJobDefinitionsResponse?: shared.ListModelExplainabilityJobDefinitionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
