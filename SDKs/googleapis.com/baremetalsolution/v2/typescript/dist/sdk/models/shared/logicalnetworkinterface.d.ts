import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LogicalNetworkInterfaceNetworkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}
/**
 * Each logical network interface is effectively a network and IP pair.
**/
export declare class LogicalNetworkInterface extends SpeakeasyBase {
    defaultGateway?: boolean;
    id?: string;
    ipAddress?: string;
    network?: string;
    networkType?: LogicalNetworkInterfaceNetworkTypeEnum;
}
