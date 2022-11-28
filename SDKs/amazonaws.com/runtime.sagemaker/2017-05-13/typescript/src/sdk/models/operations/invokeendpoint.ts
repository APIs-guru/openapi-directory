import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvokeEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EndpointName" })
  endpointName: string;
}


export class InvokeEndpointHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Custom-Attributes" })
  xAmznSageMakerCustomAttributes?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Inference-Id" })
  xAmznSageMakerInferenceId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Target-Container-Hostname" })
  xAmznSageMakerTargetContainerHostname?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Target-Model" })
  xAmznSageMakerTargetModel?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Target-Variant" })
  xAmznSageMakerTargetVariant?: string;
}


export class InvokeEndpointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body: string;
}


export class InvokeEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvokeEndpointPathParams;

  @SpeakeasyMetadata()
  headers: InvokeEndpointHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: InvokeEndpointRequestBody;
}


export class InvokeEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailure?: any;

  @SpeakeasyMetadata()
  invokeEndpointOutput?: shared.InvokeEndpointOutput;

  @SpeakeasyMetadata()
  modelError?: any;

  @SpeakeasyMetadata()
  serviceUnavailable?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: any;
}
