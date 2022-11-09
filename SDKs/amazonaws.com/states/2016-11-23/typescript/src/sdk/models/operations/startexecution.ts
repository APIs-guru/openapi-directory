import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartExecutionXAmzTargetEnum {
    AwsStepFunctionsStartExecution = "AWSStepFunctions.StartExecution"
}


export class StartExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartExecutionXAmzTargetEnum;
}


export class StartExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartExecutionInput;
}


export class StartExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  executionAlreadyExists?: any;

  @Metadata()
  executionLimitExceeded?: any;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  invalidExecutionInput?: any;

  @Metadata()
  invalidName?: any;

  @Metadata()
  startExecutionOutput?: shared.StartExecutionOutput;

  @Metadata()
  stateMachineDeleting?: any;

  @Metadata()
  stateMachineDoesNotExist?: any;

  @Metadata()
  statusCode: number;
}
