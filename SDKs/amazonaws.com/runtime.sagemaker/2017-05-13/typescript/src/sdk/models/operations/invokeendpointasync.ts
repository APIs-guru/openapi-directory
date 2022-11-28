import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvokeEndpointAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EndpointName" })
  endpointName: string;
}


export class InvokeEndpointAsyncHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Accept" })
  xAmznSageMakerAccept?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Content-Type" })
  xAmznSageMakerContentType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Custom-Attributes" })
  xAmznSageMakerCustomAttributes?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Inference-Id" })
  xAmznSageMakerInferenceId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-InputLocation" })
  xAmznSageMakerInputLocation: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-RequestTTLSeconds" })
  xAmznSageMakerRequestTtlSeconds?: number;
}


export class InvokeEndpointAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvokeEndpointAsyncPathParams;

  @SpeakeasyMetadata()
  headers: InvokeEndpointAsyncHeaders;
}


export class InvokeEndpointAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailure?: any;

  @SpeakeasyMetadata()
  invokeEndpointAsyncOutput?: shared.InvokeEndpointAsyncOutput;

  @SpeakeasyMetadata()
  serviceUnavailable?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: any;
}
