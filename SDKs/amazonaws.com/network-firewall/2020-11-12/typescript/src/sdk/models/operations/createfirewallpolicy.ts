import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112CreateFirewallPolicy = "NetworkFirewall_20201112.CreateFirewallPolicy"
}


export class CreateFirewallPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFirewallPolicyXAmzTargetEnum;
}


export class CreateFirewallPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFirewallPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFirewallPolicyRequest;
}


export class CreateFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFirewallPolicyResponse?: shared.CreateFirewallPolicyResponse;

  @Metadata()
  insufficientCapacityException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
