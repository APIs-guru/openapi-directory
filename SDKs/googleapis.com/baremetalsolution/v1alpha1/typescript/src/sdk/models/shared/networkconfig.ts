import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VlanAttachment } from "./vlanattachment";

export enum NetworkConfigBandwidthEnum {
    BandwidthUnspecified = "BANDWIDTH_UNSPECIFIED"
,    Bw1Gbps = "BW_1_GBPS"
,    Bw2Gbps = "BW_2_GBPS"
,    Bw5Gbps = "BW_5_GBPS"
,    Bw10Gbps = "BW_10_GBPS"
}

export enum NetworkConfigServiceCidrEnum {
    ServiceCidrUnspecified = "SERVICE_CIDR_UNSPECIFIED"
,    Disabled = "DISABLED"
,    High26 = "HIGH_26"
,    High27 = "HIGH_27"
,    High28 = "HIGH_28"
}

export enum NetworkConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Client = "CLIENT"
,    Private = "PRIVATE"
}


// NetworkConfig
/** 
 * Configuration parameters for a new network.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth?: NetworkConfigBandwidthEnum;

  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=serviceCidr" })
  serviceCidr?: NetworkConfigServiceCidrEnum;

  @Metadata({ data: "json, name=type" })
  type?: NetworkConfigTypeEnum;

  @Metadata({ data: "json, name=userNote" })
  userNote?: string;

  @Metadata({ data: "json, name=vlanAttachments", elemType: shared.VlanAttachment })
  vlanAttachments?: VlanAttachment[];
}
