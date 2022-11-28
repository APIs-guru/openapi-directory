import { SpeakeasyBase } from "../../../internal/utils";
/**
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.
**/
export declare class IpAddressUpdate extends SpeakeasyBase {
    ip?: string;
    ipId?: string;
    subnetId?: string;
}
