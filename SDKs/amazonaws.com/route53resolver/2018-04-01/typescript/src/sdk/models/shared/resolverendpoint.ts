import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { ResolverEndpointStatusEnum } from "./resolverendpointstatusenum";


// ResolverEndpoint
/** 
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
**/
export class ResolverEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=Direction" })
  direction?: ResolverEndpointDirectionEnum;

  @Metadata({ data: "json, name=HostVPCId" })
  hostVpcId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IpAddressCount" })
  ipAddressCount?: number;

  @Metadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=Status" })
  status?: ResolverEndpointStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
