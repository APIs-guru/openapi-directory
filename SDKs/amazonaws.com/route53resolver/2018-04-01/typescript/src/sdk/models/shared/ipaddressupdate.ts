import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpAddressUpdate
/** 
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.
**/
export class IpAddressUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=IpId" })
  ipId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
