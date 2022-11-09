import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RetryPipelineExecutionXAmzTargetEnum {
    SageMakerRetryPipelineExecution = "SageMaker.RetryPipelineExecution"
}


export class RetryPipelineExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: RetryPipelineExecutionXAmzTargetEnum;
}


export class RetryPipelineExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RetryPipelineExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RetryPipelineExecutionRequest;
}


export class RetryPipelineExecutionResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  retryPipelineExecutionResponse?: shared.RetryPipelineExecutionResponse;

  @Metadata()
  statusCode: number;
}
