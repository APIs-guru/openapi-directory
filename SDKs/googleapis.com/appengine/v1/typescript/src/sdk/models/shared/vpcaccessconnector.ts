import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VpcAccessConnectorEgressSettingEnum {
    EgressSettingUnspecified = "EGRESS_SETTING_UNSPECIFIED"
,    AllTraffic = "ALL_TRAFFIC"
,    PrivateIpRanges = "PRIVATE_IP_RANGES"
}


// VpcAccessConnector
/** 
 * VPC access connector specification.
**/
export class VpcAccessConnector extends SpeakeasyBase {
  @Metadata({ data: "json, name=egressSetting" })
  egressSetting?: VpcAccessConnectorEgressSettingEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
