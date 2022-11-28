import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { ResolverEndpointStatusEnum } from "./resolverendpointstatusenum";



// ResolverEndpoint
/** 
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
**/
export class ResolverEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Direction" })
  direction?: ResolverEndpointDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=HostVPCId" })
  hostVpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddressCount" })
  ipAddressCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ResolverEndpointStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
