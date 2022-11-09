import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112DescribeFirewallPolicy = "NetworkFirewall_20201112.DescribeFirewallPolicy"
}


export class DescribeFirewallPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeFirewallPolicyXAmzTargetEnum;
}


export class DescribeFirewallPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeFirewallPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeFirewallPolicyRequest;
}


export class DescribeFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeFirewallPolicyResponse?: shared.DescribeFirewallPolicyResponse;

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
