import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListNotebookInstanceLifecycleConfigsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListNotebookInstanceLifecycleConfigsXAmzTargetEnum {
    SageMakerListNotebookInstanceLifecycleConfigs = "SageMaker.ListNotebookInstanceLifecycleConfigs"
}


export class ListNotebookInstanceLifecycleConfigsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListNotebookInstanceLifecycleConfigsXAmzTargetEnum;
}


export class ListNotebookInstanceLifecycleConfigsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListNotebookInstanceLifecycleConfigsQueryParams;

  @Metadata()
  headers: ListNotebookInstanceLifecycleConfigsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListNotebookInstanceLifecycleConfigsInput;
}


export class ListNotebookInstanceLifecycleConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listNotebookInstanceLifecycleConfigsOutput?: shared.ListNotebookInstanceLifecycleConfigsOutput;

  @Metadata()
  statusCode: number;
}
