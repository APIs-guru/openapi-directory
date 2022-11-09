import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SendPipelineExecutionStepFailureXAmzTargetEnum {
    SageMakerSendPipelineExecutionStepFailure = "SageMaker.SendPipelineExecutionStepFailure"
}


export class SendPipelineExecutionStepFailureHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendPipelineExecutionStepFailureXAmzTargetEnum;
}


export class SendPipelineExecutionStepFailureRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendPipelineExecutionStepFailureHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendPipelineExecutionStepFailureRequest;
}


export class SendPipelineExecutionStepFailureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  sendPipelineExecutionStepFailureResponse?: shared.SendPipelineExecutionStepFailureResponse;

  @Metadata()
  statusCode: number;
}
