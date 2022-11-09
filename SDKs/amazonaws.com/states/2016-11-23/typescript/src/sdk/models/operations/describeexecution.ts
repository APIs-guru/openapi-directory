import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeExecutionXAmzTargetEnum {
    AwsStepFunctionsDescribeExecution = "AWSStepFunctions.DescribeExecution"
}


export class DescribeExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeExecutionXAmzTargetEnum;
}


export class DescribeExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeExecutionInput;
}


export class DescribeExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeExecutionOutput?: shared.DescribeExecutionOutput;

  @Metadata()
  executionDoesNotExist?: any;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  statusCode: number;
}
