import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartPipelineExecutionXAmzTargetEnum {
    SageMakerStartPipelineExecution = "SageMaker.StartPipelineExecution"
}


export class StartPipelineExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartPipelineExecutionXAmzTargetEnum;
}


export class StartPipelineExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartPipelineExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartPipelineExecutionRequest;
}


export class StartPipelineExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  resourceNotFound?: any;

  @SpeakeasyMetadata()
  startPipelineExecutionResponse?: shared.StartPipelineExecutionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
