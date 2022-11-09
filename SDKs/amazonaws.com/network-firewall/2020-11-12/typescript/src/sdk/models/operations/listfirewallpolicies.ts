import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFirewallPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListFirewallPoliciesXAmzTargetEnum {
    NetworkFirewall20201112ListFirewallPolicies = "NetworkFirewall_20201112.ListFirewallPolicies"
}


export class ListFirewallPoliciesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListFirewallPoliciesXAmzTargetEnum;
}


export class ListFirewallPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFirewallPoliciesQueryParams;

  @Metadata()
  headers: ListFirewallPoliciesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListFirewallPoliciesRequest;
}


export class ListFirewallPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listFirewallPoliciesResponse?: shared.ListFirewallPoliciesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
