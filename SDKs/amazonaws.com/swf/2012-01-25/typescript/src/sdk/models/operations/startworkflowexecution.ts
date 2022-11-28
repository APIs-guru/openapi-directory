import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceStartWorkflowExecution = "SimpleWorkflowService.StartWorkflowExecution"
}


export class StartWorkflowExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartWorkflowExecutionXAmzTargetEnum;
}


export class StartWorkflowExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartWorkflowExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartWorkflowExecutionInput;
}


export class StartWorkflowExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultUndefinedFault?: any;

  @SpeakeasyMetadata()
  limitExceededFault?: any;

  @SpeakeasyMetadata()
  operationNotPermittedFault?: any;

  @SpeakeasyMetadata()
  run?: shared.Run;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  typeDeprecatedFault?: any;

  @SpeakeasyMetadata()
  unknownResourceFault?: any;

  @SpeakeasyMetadata()
  workflowExecutionAlreadyStartedFault?: any;
}
