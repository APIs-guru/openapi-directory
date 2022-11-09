import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFirewallDomainListXAmzTargetEnum {
    Route53ResolverGetFirewallDomainList = "Route53Resolver.GetFirewallDomainList"
}


export class GetFirewallDomainListHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetFirewallDomainListXAmzTargetEnum;
}


export class GetFirewallDomainListRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetFirewallDomainListHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetFirewallDomainListRequest;
}


export class GetFirewallDomainListResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getFirewallDomainListResponse?: shared.GetFirewallDomainListResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
