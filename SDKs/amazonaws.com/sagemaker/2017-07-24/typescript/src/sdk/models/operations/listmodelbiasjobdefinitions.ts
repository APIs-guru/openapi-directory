import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListModelBiasJobDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListModelBiasJobDefinitionsXAmzTargetEnum {
    SageMakerListModelBiasJobDefinitions = "SageMaker.ListModelBiasJobDefinitions"
}


export class ListModelBiasJobDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListModelBiasJobDefinitionsXAmzTargetEnum;
}


export class ListModelBiasJobDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListModelBiasJobDefinitionsQueryParams;

  @Metadata()
  headers: ListModelBiasJobDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListModelBiasJobDefinitionsRequest;
}


export class ListModelBiasJobDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listModelBiasJobDefinitionsResponse?: shared.ListModelBiasJobDefinitionsResponse;

  @Metadata()
  statusCode: number;
}
