import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateEndpointConfigXAmzTargetEnum {
    SageMakerCreateEndpointConfig = "SageMaker.CreateEndpointConfig"
}


export class CreateEndpointConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateEndpointConfigXAmzTargetEnum;
}


export class CreateEndpointConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEndpointConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateEndpointConfigInput;
}


export class CreateEndpointConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createEndpointConfigOutput?: shared.CreateEndpointConfigOutput;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
