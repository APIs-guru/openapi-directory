import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListModelQualityJobDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListModelQualityJobDefinitionsXAmzTargetEnum {
    SageMakerListModelQualityJobDefinitions = "SageMaker.ListModelQualityJobDefinitions"
}


export class ListModelQualityJobDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListModelQualityJobDefinitionsXAmzTargetEnum;
}


export class ListModelQualityJobDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListModelQualityJobDefinitionsQueryParams;

  @Metadata()
  headers: ListModelQualityJobDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListModelQualityJobDefinitionsRequest;
}


export class ListModelQualityJobDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listModelQualityJobDefinitionsResponse?: shared.ListModelQualityJobDefinitionsResponse;

  @Metadata()
  statusCode: number;
}
