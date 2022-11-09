import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeModelExplainabilityJobDefinition = "SageMaker.DescribeModelExplainabilityJobDefinition"
}


export class DescribeModelExplainabilityJobDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeModelExplainabilityJobDefinitionXAmzTargetEnum;
}


export class DescribeModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeModelExplainabilityJobDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeModelExplainabilityJobDefinitionRequest;
}


export class DescribeModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeModelExplainabilityJobDefinitionResponse?: shared.DescribeModelExplainabilityJobDefinitionResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
