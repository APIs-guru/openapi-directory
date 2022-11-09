import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFlowDefinitionXAmzTargetEnum {
    SageMakerCreateFlowDefinition = "SageMaker.CreateFlowDefinition"
}


export class CreateFlowDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFlowDefinitionXAmzTargetEnum;
}


export class CreateFlowDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFlowDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFlowDefinitionRequest;
}


export class CreateFlowDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFlowDefinitionResponse?: shared.CreateFlowDefinitionResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
