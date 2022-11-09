import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeStreamConsumerXAmzTargetEnum {
    Kinesis20131202DescribeStreamConsumer = "Kinesis_20131202.DescribeStreamConsumer"
}


export class DescribeStreamConsumerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeStreamConsumerXAmzTargetEnum;
}


export class DescribeStreamConsumerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeStreamConsumerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStreamConsumerInput;
}


export class DescribeStreamConsumerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeStreamConsumerOutput?: shared.DescribeStreamConsumerOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
