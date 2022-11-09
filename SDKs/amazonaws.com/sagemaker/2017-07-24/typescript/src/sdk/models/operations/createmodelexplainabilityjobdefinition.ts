import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelExplainabilityJobDefinition = "SageMaker.CreateModelExplainabilityJobDefinition"
}


export class CreateModelExplainabilityJobDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateModelExplainabilityJobDefinitionXAmzTargetEnum;
}


export class CreateModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateModelExplainabilityJobDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateModelExplainabilityJobDefinitionRequest;
}


export class CreateModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createModelExplainabilityJobDefinitionResponse?: shared.CreateModelExplainabilityJobDefinitionResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
