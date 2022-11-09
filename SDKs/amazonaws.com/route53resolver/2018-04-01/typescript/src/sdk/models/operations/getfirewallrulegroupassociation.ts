import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFirewallRuleGroupAssociationXAmzTargetEnum {
    Route53ResolverGetFirewallRuleGroupAssociation = "Route53Resolver.GetFirewallRuleGroupAssociation"
}


export class GetFirewallRuleGroupAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetFirewallRuleGroupAssociationXAmzTargetEnum;
}


export class GetFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetFirewallRuleGroupAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetFirewallRuleGroupAssociationRequest;
}


export class GetFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getFirewallRuleGroupAssociationResponse?: shared.GetFirewallRuleGroupAssociationResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
