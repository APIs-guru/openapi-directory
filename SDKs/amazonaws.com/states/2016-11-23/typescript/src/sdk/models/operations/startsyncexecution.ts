import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartSyncExecutionXAmzTargetEnum {
    AwsStepFunctionsStartSyncExecution = "AWSStepFunctions.StartSyncExecution"
}


export class StartSyncExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartSyncExecutionXAmzTargetEnum;
}


export class StartSyncExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartSyncExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartSyncExecutionInput;
}


export class StartSyncExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  invalidExecutionInput?: any;

  @Metadata()
  invalidName?: any;

  @Metadata()
  startSyncExecutionOutput?: shared.StartSyncExecutionOutput;

  @Metadata()
  stateMachineDeleting?: any;

  @Metadata()
  stateMachineDoesNotExist?: any;

  @Metadata()
  stateMachineTypeNotSupported?: any;

  @Metadata()
  statusCode: number;
}
