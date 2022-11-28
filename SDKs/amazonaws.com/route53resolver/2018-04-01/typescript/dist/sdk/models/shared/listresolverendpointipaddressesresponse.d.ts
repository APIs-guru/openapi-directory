import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressResponse } from "./ipaddressresponse";
export declare class ListResolverEndpointIpAddressesResponse extends SpeakeasyBase {
    ipAddresses?: IpAddressResponse[];
    maxResults?: number;
    nextToken?: string;
}
