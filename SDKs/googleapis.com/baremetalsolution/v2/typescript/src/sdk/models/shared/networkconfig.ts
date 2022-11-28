import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntakeVlanAttachment } from "./intakevlanattachment";


export enum NetworkConfigBandwidthEnum {
    BandwidthUnspecified = "BANDWIDTH_UNSPECIFIED",
    Bw1Gbps = "BW_1_GBPS",
    Bw2Gbps = "BW_2_GBPS",
    Bw5Gbps = "BW_5_GBPS",
    Bw10Gbps = "BW_10_GBPS"
}

export enum NetworkConfigServiceCidrEnum {
    ServiceCidrUnspecified = "SERVICE_CIDR_UNSPECIFIED",
    Disabled = "DISABLED",
    High26 = "HIGH_26",
    High27 = "HIGH_27",
    High28 = "HIGH_28"
}

export enum NetworkConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}


// NetworkConfigInput
/** 
 * Configuration parameters for a new network.
**/
export class NetworkConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth?: NetworkConfigBandwidthEnum;

  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=gcpService" })
  gcpService?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jumboFramesEnabled" })
  jumboFramesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceCidr" })
  serviceCidr?: NetworkConfigServiceCidrEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NetworkConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userNote" })
  userNote?: string;

  @SpeakeasyMetadata({ data: "json, name=vlanAttachments", elemType: IntakeVlanAttachment })
  vlanAttachments?: IntakeVlanAttachment[];

  @SpeakeasyMetadata({ data: "json, name=vlanSameProject" })
  vlanSameProject?: boolean;
}


// NetworkConfig
/** 
 * Configuration parameters for a new network.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth?: NetworkConfigBandwidthEnum;

  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=gcpService" })
  gcpService?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jumboFramesEnabled" })
  jumboFramesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceCidr" })
  serviceCidr?: NetworkConfigServiceCidrEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NetworkConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userNote" })
  userNote?: string;

  @SpeakeasyMetadata({ data: "json, name=vlanAttachments", elemType: IntakeVlanAttachment })
  vlanAttachments?: IntakeVlanAttachment[];

  @SpeakeasyMetadata({ data: "json, name=vlanSameProject" })
  vlanSameProject?: boolean;
}
