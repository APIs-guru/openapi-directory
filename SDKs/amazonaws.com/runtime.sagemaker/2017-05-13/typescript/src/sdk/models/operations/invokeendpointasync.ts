import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvokeEndpointAsyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EndpointName" })
  endpointName: string;
}


export class InvokeEndpointAsyncHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Accept" })
  xAmznSageMakerAccept?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Content-Type" })
  xAmznSageMakerContentType?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Custom-Attributes" })
  xAmznSageMakerCustomAttributes?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Inference-Id" })
  xAmznSageMakerInferenceId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-InputLocation" })
  xAmznSageMakerInputLocation: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-RequestTTLSeconds" })
  xAmznSageMakerRequestTtlSeconds?: number;
}


export class InvokeEndpointAsyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InvokeEndpointAsyncPathParams;

  @Metadata()
  headers: InvokeEndpointAsyncHeaders;
}


export class InvokeEndpointAsyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailure?: any;

  @Metadata()
  invokeEndpointAsyncOutput?: shared.InvokeEndpointAsyncOutput;

  @Metadata()
  serviceUnavailable?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: any;
}
