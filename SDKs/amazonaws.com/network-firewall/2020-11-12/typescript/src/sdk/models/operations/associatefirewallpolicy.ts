import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112AssociateFirewallPolicy = "NetworkFirewall_20201112.AssociateFirewallPolicy"
}


export class AssociateFirewallPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateFirewallPolicyXAmzTargetEnum;
}


export class AssociateFirewallPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateFirewallPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateFirewallPolicyRequest;
}


export class AssociateFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata()
  associateFirewallPolicyResponse?: shared.AssociateFirewallPolicyResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidTokenException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
