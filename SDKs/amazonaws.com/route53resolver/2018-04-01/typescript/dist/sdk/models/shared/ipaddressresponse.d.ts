import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressStatusEnum } from "./ipaddressstatusenum";
/**
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
**/
export declare class IpAddressResponse extends SpeakeasyBase {
    creationTime?: string;
    ip?: string;
    ipId?: string;
    modificationTime?: string;
    status?: IpAddressStatusEnum;
    statusMessage?: string;
    subnetId?: string;
}
