import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAddress } from "./networkaddress";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
export declare enum InstanceConfigNetworkConfigEnum {
    NetworkconfigUnspecified = "NETWORKCONFIG_UNSPECIFIED",
    SingleVlan = "SINGLE_VLAN",
    MultiVlan = "MULTI_VLAN"
}
/**
 * Configuration parameters for a new instance.
**/
export declare class InstanceConfigInput extends SpeakeasyBase {
    accountNetworksEnabled?: boolean;
    clientNetwork?: NetworkAddress;
    hyperthreading?: boolean;
    id?: string;
    instanceType?: string;
    logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];
    networkConfig?: InstanceConfigNetworkConfigEnum;
    networkTemplate?: string;
    osImage?: string;
    privateNetwork?: NetworkAddress;
    userNote?: string;
}
/**
 * Configuration parameters for a new instance.
**/
export declare class InstanceConfig extends SpeakeasyBase {
    accountNetworksEnabled?: boolean;
    clientNetwork?: NetworkAddress;
    hyperthreading?: boolean;
    id?: string;
    instanceType?: string;
    logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];
    name?: string;
    networkConfig?: InstanceConfigNetworkConfigEnum;
    networkTemplate?: string;
    osImage?: string;
    privateNetwork?: NetworkAddress;
    userNote?: string;
}
