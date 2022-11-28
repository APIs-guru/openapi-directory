import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateStateMachineXAmzTargetEnum {
    AwsStepFunctionsCreateStateMachine = "AWSStepFunctions.CreateStateMachine"
}


export class CreateStateMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateStateMachineXAmzTargetEnum;
}


export class CreateStateMachineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateStateMachineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateStateMachineInput;
}


export class CreateStateMachineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createStateMachineOutput?: shared.CreateStateMachineOutput;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  invalidDefinition?: any;

  @SpeakeasyMetadata()
  invalidLoggingConfiguration?: any;

  @SpeakeasyMetadata()
  invalidName?: any;

  @SpeakeasyMetadata()
  invalidTracingConfiguration?: any;

  @SpeakeasyMetadata()
  stateMachineAlreadyExists?: any;

  @SpeakeasyMetadata()
  stateMachineDeleting?: any;

  @SpeakeasyMetadata()
  stateMachineLimitExceeded?: any;

  @SpeakeasyMetadata()
  stateMachineTypeNotSupported?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyTags?: any;
}
