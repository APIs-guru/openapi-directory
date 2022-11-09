import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeStateMachineForExecutionXAmzTargetEnum {
    AwsStepFunctionsDescribeStateMachineForExecution = "AWSStepFunctions.DescribeStateMachineForExecution"
}


export class DescribeStateMachineForExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeStateMachineForExecutionXAmzTargetEnum;
}


export class DescribeStateMachineForExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeStateMachineForExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStateMachineForExecutionInput;
}


export class DescribeStateMachineForExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeStateMachineForExecutionOutput?: shared.DescribeStateMachineForExecutionOutput;

  @Metadata()
  executionDoesNotExist?: any;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  statusCode: number;
}
