import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VpcAccessConnectorEgressSettingEnum {
    EgressSettingUnspecified = "EGRESS_SETTING_UNSPECIFIED",
    AllTraffic = "ALL_TRAFFIC",
    PrivateIpRanges = "PRIVATE_IP_RANGES"
}


// VpcAccessConnector
/** 
 * VPC access connector specification.
**/
export class VpcAccessConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=egressSetting" })
  egressSetting?: VpcAccessConnectorEgressSettingEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
