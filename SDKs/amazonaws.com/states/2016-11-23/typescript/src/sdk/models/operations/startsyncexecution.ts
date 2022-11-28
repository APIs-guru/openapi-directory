import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartSyncExecutionXAmzTargetEnum {
    AwsStepFunctionsStartSyncExecution = "AWSStepFunctions.StartSyncExecution"
}


export class StartSyncExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartSyncExecutionXAmzTargetEnum;
}


export class StartSyncExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartSyncExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartSyncExecutionInput;
}


export class StartSyncExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  invalidExecutionInput?: any;

  @SpeakeasyMetadata()
  invalidName?: any;

  @SpeakeasyMetadata()
  startSyncExecutionOutput?: shared.StartSyncExecutionOutput;

  @SpeakeasyMetadata()
  stateMachineDeleting?: any;

  @SpeakeasyMetadata()
  stateMachineDoesNotExist?: any;

  @SpeakeasyMetadata()
  stateMachineTypeNotSupported?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
