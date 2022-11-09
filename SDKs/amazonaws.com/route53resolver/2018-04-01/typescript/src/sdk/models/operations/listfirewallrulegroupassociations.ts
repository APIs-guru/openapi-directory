import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFirewallRuleGroupAssociationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListFirewallRuleGroupAssociationsXAmzTargetEnum {
    Route53ResolverListFirewallRuleGroupAssociations = "Route53Resolver.ListFirewallRuleGroupAssociations"
}


export class ListFirewallRuleGroupAssociationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListFirewallRuleGroupAssociationsXAmzTargetEnum;
}


export class ListFirewallRuleGroupAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFirewallRuleGroupAssociationsQueryParams;

  @Metadata()
  headers: ListFirewallRuleGroupAssociationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListFirewallRuleGroupAssociationsRequest;
}


export class ListFirewallRuleGroupAssociationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  listFirewallRuleGroupAssociationsResponse?: shared.ListFirewallRuleGroupAssociationsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
