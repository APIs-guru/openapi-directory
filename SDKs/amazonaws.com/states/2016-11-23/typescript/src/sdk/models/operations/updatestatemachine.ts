import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateStateMachineXAmzTargetEnum {
    AwsStepFunctionsUpdateStateMachine = "AWSStepFunctions.UpdateStateMachine"
}


export class UpdateStateMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateStateMachineXAmzTargetEnum;
}


export class UpdateStateMachineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateStateMachineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateStateMachineInput;
}


export class UpdateStateMachineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  invalidDefinition?: any;

  @SpeakeasyMetadata()
  invalidLoggingConfiguration?: any;

  @SpeakeasyMetadata()
  invalidTracingConfiguration?: any;

  @SpeakeasyMetadata()
  missingRequiredParameter?: any;

  @SpeakeasyMetadata()
  stateMachineDeleting?: any;

  @SpeakeasyMetadata()
  stateMachineDoesNotExist?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateStateMachineOutput?: shared.UpdateStateMachineOutput;
}
