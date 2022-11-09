import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpAddressUpdate
/** 
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.
**/
export class IpAddressUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ip" })
  ip?: string;

  @Metadata({ data: "json, name=IpId" })
  ipId?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
