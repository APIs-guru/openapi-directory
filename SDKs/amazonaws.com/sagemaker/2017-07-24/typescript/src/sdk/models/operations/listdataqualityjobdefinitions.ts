import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDataQualityJobDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListDataQualityJobDefinitionsXAmzTargetEnum {
    SageMakerListDataQualityJobDefinitions = "SageMaker.ListDataQualityJobDefinitions"
}


export class ListDataQualityJobDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDataQualityJobDefinitionsXAmzTargetEnum;
}


export class ListDataQualityJobDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDataQualityJobDefinitionsQueryParams;

  @Metadata()
  headers: ListDataQualityJobDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDataQualityJobDefinitionsRequest;
}


export class ListDataQualityJobDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDataQualityJobDefinitionsResponse?: shared.ListDataQualityJobDefinitionsResponse;

  @Metadata()
  statusCode: number;
}
