import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverCreateFirewallRuleGroup = "Route53Resolver.CreateFirewallRuleGroup"
}


export class CreateFirewallRuleGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFirewallRuleGroupXAmzTargetEnum;
}


export class CreateFirewallRuleGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFirewallRuleGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFirewallRuleGroupRequest;
}


export class CreateFirewallRuleGroupResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFirewallRuleGroupResponse?: shared.CreateFirewallRuleGroupResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
