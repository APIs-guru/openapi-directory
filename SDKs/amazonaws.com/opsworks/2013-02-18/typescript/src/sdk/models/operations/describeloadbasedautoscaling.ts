import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLoadBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218DescribeLoadBasedAutoScaling = "OpsWorks_20130218.DescribeLoadBasedAutoScaling"
}


export class DescribeLoadBasedAutoScalingHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLoadBasedAutoScalingXAmzTargetEnum;
}


export class DescribeLoadBasedAutoScalingRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLoadBasedAutoScalingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLoadBasedAutoScalingRequest;
}


export class DescribeLoadBasedAutoScalingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLoadBasedAutoScalingResult?: shared.DescribeLoadBasedAutoScalingResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
