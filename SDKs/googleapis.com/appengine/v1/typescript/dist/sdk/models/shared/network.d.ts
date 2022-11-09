import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum NetworkInstanceIpModeEnum {
    InstanceIpModeUnspecified = "INSTANCE_IP_MODE_UNSPECIFIED",
    External = "EXTERNAL",
    Internal = "INTERNAL"
}
/**
 * Extra network settings. Only applicable in the App Engine flexible environment.
**/
export declare class Network extends SpeakeasyBase {
    forwardedPorts?: string[];
    instanceIpMode?: NetworkInstanceIpModeEnum;
    instanceTag?: string;
    name?: string;
    sessionAffinity?: boolean;
    subnetworkName?: string;
}
