import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeSubscriptionXAmzTargetEnum {
    AwsShield20160616DescribeSubscription = "AWSShield_20160616.DescribeSubscription"
}


export class DescribeSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeSubscriptionXAmzTargetEnum;
}


export class DescribeSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSubscriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DescribeSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSubscriptionResponse?: shared.DescribeSubscriptionResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
