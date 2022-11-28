import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkAddress } from "./networkaddress";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";


export enum InstanceConfigNetworkConfigEnum {
    NetworkconfigUnspecified = "NETWORKCONFIG_UNSPECIFIED",
    SingleVlan = "SINGLE_VLAN",
    MultiVlan = "MULTI_VLAN"
}


// InstanceConfigInput
/** 
 * Configuration parameters for a new instance.
**/
export class InstanceConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNetworksEnabled" })
  accountNetworksEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientNetwork" })
  clientNetwork?: NetworkAddress;

  @SpeakeasyMetadata({ data: "json, name=hyperthreading" })
  hyperthreading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: InstanceConfigNetworkConfigEnum;

  @SpeakeasyMetadata({ data: "json, name=networkTemplate" })
  networkTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=osImage" })
  osImage?: string;

  @SpeakeasyMetadata({ data: "json, name=privateNetwork" })
  privateNetwork?: NetworkAddress;

  @SpeakeasyMetadata({ data: "json, name=userNote" })
  userNote?: string;
}


// InstanceConfig
/** 
 * Configuration parameters for a new instance.
**/
export class InstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNetworksEnabled" })
  accountNetworksEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientNetwork" })
  clientNetwork?: NetworkAddress;

  @SpeakeasyMetadata({ data: "json, name=hyperthreading" })
  hyperthreading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: InstanceConfigNetworkConfigEnum;

  @SpeakeasyMetadata({ data: "json, name=networkTemplate" })
  networkTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=osImage" })
  osImage?: string;

  @SpeakeasyMetadata({ data: "json, name=privateNetwork" })
  privateNetwork?: NetworkAddress;

  @SpeakeasyMetadata({ data: "json, name=userNote" })
  userNote?: string;
}
