import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListClosedWorkflowExecutionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" })
  maximumPageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" })
  nextPageToken?: string;
}

export enum ListClosedWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceListClosedWorkflowExecutions = "SimpleWorkflowService.ListClosedWorkflowExecutions"
}


export class ListClosedWorkflowExecutionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListClosedWorkflowExecutionsXAmzTargetEnum;
}


export class ListClosedWorkflowExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListClosedWorkflowExecutionsQueryParams;

  @Metadata()
  headers: ListClosedWorkflowExecutionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListClosedWorkflowExecutionsInput;
}


export class ListClosedWorkflowExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;

  @Metadata()
  workflowExecutionInfos?: shared.WorkflowExecutionInfos;
}
