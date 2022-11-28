import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The setting used to configure ClientGateways. It is adding routes to the client's routing table after the connection is established.
**/
export declare class DestinationRoute extends SpeakeasyBase {
    address?: string;
    netmask?: string;
}
