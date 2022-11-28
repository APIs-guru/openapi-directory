import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpAddressRequest
/** 
 * In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.
**/
export class IpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId: string;
}
