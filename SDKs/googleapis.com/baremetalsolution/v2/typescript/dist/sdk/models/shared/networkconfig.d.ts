import { SpeakeasyBase } from "../../../internal/utils";
import { IntakeVlanAttachment } from "./intakevlanattachment";
export declare enum NetworkConfigBandwidthEnum {
    BandwidthUnspecified = "BANDWIDTH_UNSPECIFIED",
    Bw1Gbps = "BW_1_GBPS",
    Bw2Gbps = "BW_2_GBPS",
    Bw5Gbps = "BW_5_GBPS",
    Bw10Gbps = "BW_10_GBPS"
}
export declare enum NetworkConfigServiceCidrEnum {
    ServiceCidrUnspecified = "SERVICE_CIDR_UNSPECIFIED",
    Disabled = "DISABLED",
    High26 = "HIGH_26",
    High27 = "HIGH_27",
    High28 = "HIGH_28"
}
export declare enum NetworkConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}
/**
 * Configuration parameters for a new network.
**/
export declare class NetworkConfigInput extends SpeakeasyBase {
    bandwidth?: NetworkConfigBandwidthEnum;
    cidr?: string;
    gcpService?: string;
    id?: string;
    jumboFramesEnabled?: boolean;
    serviceCidr?: NetworkConfigServiceCidrEnum;
    type?: NetworkConfigTypeEnum;
    userNote?: string;
    vlanAttachments?: IntakeVlanAttachment[];
    vlanSameProject?: boolean;
}
/**
 * Configuration parameters for a new network.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    bandwidth?: NetworkConfigBandwidthEnum;
    cidr?: string;
    gcpService?: string;
    id?: string;
    jumboFramesEnabled?: boolean;
    name?: string;
    serviceCidr?: NetworkConfigServiceCidrEnum;
    type?: NetworkConfigTypeEnum;
    userNote?: string;
    vlanAttachments?: IntakeVlanAttachment[];
    vlanSameProject?: boolean;
}
