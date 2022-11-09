import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RequestCancelWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceRequestCancelWorkflowExecution = "SimpleWorkflowService.RequestCancelWorkflowExecution"
}


export class RequestCancelWorkflowExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: RequestCancelWorkflowExecutionXAmzTargetEnum;
}


export class RequestCancelWorkflowExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestCancelWorkflowExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RequestCancelWorkflowExecutionInput;
}


export class RequestCancelWorkflowExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;
}
