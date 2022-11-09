import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeStreamXAmzTargetEnum {
    DynamoDbStreams20120810DescribeStream = "DynamoDBStreams_20120810.DescribeStream"
}


export class DescribeStreamHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeStreamXAmzTargetEnum;
}


export class DescribeStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStreamInput;
}


export class DescribeStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeStreamOutput?: shared.DescribeStreamOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
