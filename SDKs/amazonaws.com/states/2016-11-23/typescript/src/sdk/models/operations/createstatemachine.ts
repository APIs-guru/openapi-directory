import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateStateMachineXAmzTargetEnum {
    AwsStepFunctionsCreateStateMachine = "AWSStepFunctions.CreateStateMachine"
}


export class CreateStateMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateStateMachineXAmzTargetEnum;
}


export class CreateStateMachineRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStateMachineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateStateMachineInput;
}


export class CreateStateMachineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createStateMachineOutput?: shared.CreateStateMachineOutput;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  invalidDefinition?: any;

  @Metadata()
  invalidLoggingConfiguration?: any;

  @Metadata()
  invalidName?: any;

  @Metadata()
  invalidTracingConfiguration?: any;

  @Metadata()
  stateMachineAlreadyExists?: any;

  @Metadata()
  stateMachineDeleting?: any;

  @Metadata()
  stateMachineLimitExceeded?: any;

  @Metadata()
  stateMachineTypeNotSupported?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTags?: any;
}
