import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeStateMachineXAmzTargetEnum {
    AwsStepFunctionsDescribeStateMachine = "AWSStepFunctions.DescribeStateMachine"
}


export class DescribeStateMachineHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeStateMachineXAmzTargetEnum;
}


export class DescribeStateMachineRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeStateMachineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStateMachineInput;
}


export class DescribeStateMachineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeStateMachineOutput?: shared.DescribeStateMachineOutput;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  stateMachineDoesNotExist?: any;

  @Metadata()
  statusCode: number;
}
