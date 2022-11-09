import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressStatusEnum } from "./ipaddressstatusenum";


// IpAddressResponse
/** 
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
**/
export class IpAddressResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=Ip" })
  ip?: string;

  @Metadata({ data: "json, name=IpId" })
  ipId?: string;

  @Metadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @Metadata({ data: "json, name=Status" })
  status?: IpAddressStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
