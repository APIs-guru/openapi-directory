import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntakeVlanAttachment } from "./intakevlanattachment";

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

  @Metadata({ data: "json, name=gcpService" })
  gcpService?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jumboFramesEnabled" })
  jumboFramesEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceCidr" })
  serviceCidr?: NetworkConfigServiceCidrEnum;

  @Metadata({ data: "json, name=type" })
  type?: NetworkConfigTypeEnum;

  @Metadata({ data: "json, name=userNote" })
  userNote?: string;

  @Metadata({ data: "json, name=vlanAttachments", elemType: shared.IntakeVlanAttachment })
  vlanAttachments?: IntakeVlanAttachment[];

  @Metadata({ data: "json, name=vlanSameProject" })
  vlanSameProject?: boolean;
}
