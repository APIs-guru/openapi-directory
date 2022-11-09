import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressUpdate } from "./ipaddressupdate";
export declare class DisassociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
    ipAddress: IpAddressUpdate;
    resolverEndpointId: string;
}
