import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { IpAddressRequest } from "./ipaddressrequest";
import { Tag } from "./tag";
export declare class CreateResolverEndpointRequest extends SpeakeasyBase {
    creatorRequestId: string;
    direction: ResolverEndpointDirectionEnum;
    ipAddresses: IpAddressRequest[];
    name?: string;
    securityGroupIds: string[];
    tags?: Tag[];
}
