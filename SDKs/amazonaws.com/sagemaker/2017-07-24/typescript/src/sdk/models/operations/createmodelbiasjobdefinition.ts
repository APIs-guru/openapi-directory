import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateModelBiasJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelBiasJobDefinition = "SageMaker.CreateModelBiasJobDefinition"
}


export class CreateModelBiasJobDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateModelBiasJobDefinitionXAmzTargetEnum;
}


export class CreateModelBiasJobDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateModelBiasJobDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateModelBiasJobDefinitionRequest;
}


export class CreateModelBiasJobDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createModelBiasJobDefinitionResponse?: shared.CreateModelBiasJobDefinitionResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
