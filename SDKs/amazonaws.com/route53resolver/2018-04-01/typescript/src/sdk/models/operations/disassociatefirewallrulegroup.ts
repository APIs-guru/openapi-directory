import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverDisassociateFirewallRuleGroup = "Route53Resolver.DisassociateFirewallRuleGroup"
}


export class DisassociateFirewallRuleGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateFirewallRuleGroupXAmzTargetEnum;
}


export class DisassociateFirewallRuleGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateFirewallRuleGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateFirewallRuleGroupRequest;
}


export class DisassociateFirewallRuleGroupResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disassociateFirewallRuleGroupResponse?: shared.DisassociateFirewallRuleGroupResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
