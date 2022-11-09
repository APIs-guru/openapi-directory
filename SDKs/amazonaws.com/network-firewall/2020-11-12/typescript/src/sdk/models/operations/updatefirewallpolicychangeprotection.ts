import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateFirewallPolicyChangeProtectionXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallPolicyChangeProtection = "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection"
}


export class UpdateFirewallPolicyChangeProtectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateFirewallPolicyChangeProtectionXAmzTargetEnum;
}


export class UpdateFirewallPolicyChangeProtectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateFirewallPolicyChangeProtectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateFirewallPolicyChangeProtectionRequest;
}


export class UpdateFirewallPolicyChangeProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidTokenException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceOwnerCheckException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateFirewallPolicyChangeProtectionResponse?: shared.UpdateFirewallPolicyChangeProtectionResponse;
}
