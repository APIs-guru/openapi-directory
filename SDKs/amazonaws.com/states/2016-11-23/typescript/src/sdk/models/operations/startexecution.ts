import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartExecutionXAmzTargetEnum {
    AwsStepFunctionsStartExecution = "AWSStepFunctions.StartExecution"
}


export class StartExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartExecutionXAmzTargetEnum;
}


export class StartExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartExecutionInput;
}


export class StartExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  executionAlreadyExists?: any;

  @SpeakeasyMetadata()
  executionLimitExceeded?: any;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  invalidExecutionInput?: any;

  @SpeakeasyMetadata()
  invalidName?: any;

  @SpeakeasyMetadata()
  startExecutionOutput?: shared.StartExecutionOutput;

  @SpeakeasyMetadata()
  stateMachineDeleting?: any;

  @SpeakeasyMetadata()
  stateMachineDoesNotExist?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
