import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeResourcePolicyXAmzTargetEnum {
    NetworkFirewall20201112DescribeResourcePolicy = "NetworkFirewall_20201112.DescribeResourcePolicy"
}


export class DescribeResourcePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeResourcePolicyXAmzTargetEnum;
}


export class DescribeResourcePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeResourcePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeResourcePolicyRequest;
}


export class DescribeResourcePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeResourcePolicyResponse?: shared.DescribeResourcePolicyResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
