import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceStartWorkflowExecution = "SimpleWorkflowService.StartWorkflowExecution"
}


export class StartWorkflowExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartWorkflowExecutionXAmzTargetEnum;
}


export class StartWorkflowExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartWorkflowExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartWorkflowExecutionInput;
}


export class StartWorkflowExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  defaultUndefinedFault?: any;

  @Metadata()
  limitExceededFault?: any;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  run?: shared.Run;

  @Metadata()
  statusCode: number;

  @Metadata()
  typeDeprecatedFault?: any;

  @Metadata()
  unknownResourceFault?: any;

  @Metadata()
  workflowExecutionAlreadyStartedFault?: any;
}
