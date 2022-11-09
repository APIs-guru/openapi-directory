import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteStateMachineXAmzTargetEnum {
    AwsStepFunctionsDeleteStateMachine = "AWSStepFunctions.DeleteStateMachine"
}


export class DeleteStateMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteStateMachineXAmzTargetEnum;
}


export class DeleteStateMachineRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteStateMachineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteStateMachineInput;
}


export class DeleteStateMachineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteStateMachineOutput?: Map<string, any>;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  statusCode: number;
}
