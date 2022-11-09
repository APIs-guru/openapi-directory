import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribePipelineDefinitionForExecutionXAmzTargetEnum {
    SageMakerDescribePipelineDefinitionForExecution = "SageMaker.DescribePipelineDefinitionForExecution"
}


export class DescribePipelineDefinitionForExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePipelineDefinitionForExecutionXAmzTargetEnum;
}


export class DescribePipelineDefinitionForExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribePipelineDefinitionForExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePipelineDefinitionForExecutionRequest;
}


export class DescribePipelineDefinitionForExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePipelineDefinitionForExecutionResponse?: shared.DescribePipelineDefinitionForExecutionResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
