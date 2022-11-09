import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvokeEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EndpointName" })
  endpointName: string;
}


export class InvokeEndpointHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Custom-Attributes" })
  xAmznSageMakerCustomAttributes?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Inference-Id" })
  xAmznSageMakerInferenceId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Target-Container-Hostname" })
  xAmznSageMakerTargetContainerHostname?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Target-Model" })
  xAmznSageMakerTargetModel?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-SageMaker-Target-Variant" })
  xAmznSageMakerTargetVariant?: string;
}


export class InvokeEndpointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body: string;
}


export class InvokeEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InvokeEndpointPathParams;

  @Metadata()
  headers: InvokeEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: InvokeEndpointRequestBody;
}


export class InvokeEndpointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailure?: any;

  @Metadata()
  invokeEndpointOutput?: shared.InvokeEndpointOutput;

  @Metadata()
  modelError?: any;

  @Metadata()
  serviceUnavailable?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: any;
}
