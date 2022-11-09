import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTimeBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218DescribeTimeBasedAutoScaling = "OpsWorks_20130218.DescribeTimeBasedAutoScaling"
}


export class DescribeTimeBasedAutoScalingHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTimeBasedAutoScalingXAmzTargetEnum;
}


export class DescribeTimeBasedAutoScalingRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTimeBasedAutoScalingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTimeBasedAutoScalingRequest;
}


export class DescribeTimeBasedAutoScalingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTimeBasedAutoScalingResult?: shared.DescribeTimeBasedAutoScalingResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
