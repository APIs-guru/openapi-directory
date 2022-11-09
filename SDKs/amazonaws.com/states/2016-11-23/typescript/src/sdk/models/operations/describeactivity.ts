import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeActivityXAmzTargetEnum {
    AwsStepFunctionsDescribeActivity = "AWSStepFunctions.DescribeActivity"
}


export class DescribeActivityHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeActivityXAmzTargetEnum;
}


export class DescribeActivityRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeActivityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeActivityInput;
}


export class DescribeActivityResponse extends SpeakeasyBase {
  @Metadata()
  activityDoesNotExist?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeActivityOutput?: shared.DescribeActivityOutput;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  statusCode: number;
}
