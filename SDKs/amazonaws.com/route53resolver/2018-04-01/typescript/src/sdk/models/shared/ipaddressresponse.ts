import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressStatusEnum } from "./ipaddressstatusenum";



// IpAddressResponse
/** 
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
**/
export class IpAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=IpId" })
  ipId?: string;

  @SpeakeasyMetadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: IpAddressStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
