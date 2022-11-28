import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListNotebookInstanceLifecycleConfigsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListNotebookInstanceLifecycleConfigsXAmzTargetEnum {
    SageMakerListNotebookInstanceLifecycleConfigs = "SageMaker.ListNotebookInstanceLifecycleConfigs"
}


export class ListNotebookInstanceLifecycleConfigsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListNotebookInstanceLifecycleConfigsXAmzTargetEnum;
}


export class ListNotebookInstanceLifecycleConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListNotebookInstanceLifecycleConfigsQueryParams;

  @SpeakeasyMetadata()
  headers: ListNotebookInstanceLifecycleConfigsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListNotebookInstanceLifecycleConfigsInput;
}


export class ListNotebookInstanceLifecycleConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listNotebookInstanceLifecycleConfigsOutput?: shared.ListNotebookInstanceLifecycleConfigsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
