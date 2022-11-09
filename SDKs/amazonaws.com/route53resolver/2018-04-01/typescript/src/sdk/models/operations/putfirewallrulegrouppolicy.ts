import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutFirewallRuleGroupPolicyXAmzTargetEnum {
    Route53ResolverPutFirewallRuleGroupPolicy = "Route53Resolver.PutFirewallRuleGroupPolicy"
}


export class PutFirewallRuleGroupPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutFirewallRuleGroupPolicyXAmzTargetEnum;
}


export class PutFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutFirewallRuleGroupPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutFirewallRuleGroupPolicyRequest;
}


export class PutFirewallRuleGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  putFirewallRuleGroupPolicyResponse?: shared.PutFirewallRuleGroupPolicyResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
