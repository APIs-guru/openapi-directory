import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";
/**
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
**/
export declare class VpcEndpoint extends SpeakeasyBase {
    networkInterfaces?: NetworkInterface[];
    vpcEndpointId?: string;
    vpcId?: string;
}
