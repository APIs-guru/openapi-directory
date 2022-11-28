import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAddress } from "./networkaddress";
/**
 * Configuration parameters for a new instance.
**/
export declare class InstanceConfig extends SpeakeasyBase {
    clientNetwork?: NetworkAddress;
    hyperthreading?: boolean;
    id?: string;
    instanceType?: string;
    location?: string;
    osImage?: string;
    privateNetwork?: NetworkAddress;
    userNote?: string;
}
