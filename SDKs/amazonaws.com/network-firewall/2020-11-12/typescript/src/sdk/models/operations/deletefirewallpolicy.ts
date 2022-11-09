import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112DeleteFirewallPolicy = "NetworkFirewall_20201112.DeleteFirewallPolicy"
}


export class DeleteFirewallPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteFirewallPolicyXAmzTargetEnum;
}


export class DeleteFirewallPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteFirewallPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteFirewallPolicyRequest;
}


export class DeleteFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteFirewallPolicyResponse?: shared.DeleteFirewallPolicyResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
