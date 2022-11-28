import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListWorkflowTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" })
  maximumPageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" })
  nextPageToken?: string;
}

export enum ListWorkflowTypesXAmzTargetEnum {
    SimpleWorkflowServiceListWorkflowTypes = "SimpleWorkflowService.ListWorkflowTypes"
}


export class ListWorkflowTypesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListWorkflowTypesXAmzTargetEnum;
}


export class ListWorkflowTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListWorkflowTypesQueryParams;

  @SpeakeasyMetadata()
  headers: ListWorkflowTypesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListWorkflowTypesInput;
}


export class ListWorkflowTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationNotPermittedFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceFault?: any;

  @SpeakeasyMetadata()
  workflowTypeInfos?: shared.WorkflowTypeInfos;
}
