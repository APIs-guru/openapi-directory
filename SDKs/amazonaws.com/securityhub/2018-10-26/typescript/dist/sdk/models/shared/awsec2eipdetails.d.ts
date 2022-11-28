import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Elastic IP address.
**/
export declare class AwsEc2EipDetails extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    domain?: string;
    instanceId?: string;
    networkBorderGroup?: string;
    networkInterfaceId?: string;
    networkInterfaceOwnerId?: string;
    privateIpAddress?: string;
    publicIp?: string;
    publicIpv4Pool?: string;
}
