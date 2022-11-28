import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeStateMachineForExecutionXAmzTargetEnum {
    AwsStepFunctionsDescribeStateMachineForExecution = "AWSStepFunctions.DescribeStateMachineForExecution"
}


export class DescribeStateMachineForExecutionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeStateMachineForExecutionXAmzTargetEnum;
}


export class DescribeStateMachineForExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeStateMachineForExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStateMachineForExecutionInput;
}


export class DescribeStateMachineForExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeStateMachineForExecutionOutput?: shared.DescribeStateMachineForExecutionOutput;

  @SpeakeasyMetadata()
  executionDoesNotExist?: any;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
