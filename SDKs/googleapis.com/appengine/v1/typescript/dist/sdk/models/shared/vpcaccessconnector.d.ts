import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VpcAccessConnectorEgressSettingEnum {
    EgressSettingUnspecified = "EGRESS_SETTING_UNSPECIFIED",
    AllTraffic = "ALL_TRAFFIC",
    PrivateIpRanges = "PRIVATE_IP_RANGES"
}
/**
 * VPC access connector specification.
**/
export declare class VpcAccessConnector extends SpeakeasyBase {
    egressSetting?: VpcAccessConnectorEgressSettingEnum;
    name?: string;
}
