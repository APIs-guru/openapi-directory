import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDataQualityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeDataQualityJobDefinition = "SageMaker.DescribeDataQualityJobDefinition"
}


export class DescribeDataQualityJobDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDataQualityJobDefinitionXAmzTargetEnum;
}


export class DescribeDataQualityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDataQualityJobDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDataQualityJobDefinitionRequest;
}


export class DescribeDataQualityJobDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDataQualityJobDefinitionResponse?: shared.DescribeDataQualityJobDefinitionResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
