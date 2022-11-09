import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateStateMachineXAmzTargetEnum {
    AwsStepFunctionsUpdateStateMachine = "AWSStepFunctions.UpdateStateMachine"
}


export class UpdateStateMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateStateMachineXAmzTargetEnum;
}


export class UpdateStateMachineRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateStateMachineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateStateMachineInput;
}


export class UpdateStateMachineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  invalidDefinition?: any;

  @Metadata()
  invalidLoggingConfiguration?: any;

  @Metadata()
  invalidTracingConfiguration?: any;

  @Metadata()
  missingRequiredParameter?: any;

  @Metadata()
  stateMachineDeleting?: any;

  @Metadata()
  stateMachineDoesNotExist?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateStateMachineOutput?: shared.UpdateStateMachineOutput;
}
