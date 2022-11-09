import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkAddress } from "./networkaddress";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
import { NetworkAddress } from "./networkaddress";

export enum InstanceConfigNetworkConfigEnum {
    NetworkconfigUnspecified = "NETWORKCONFIG_UNSPECIFIED"
,    SingleVlan = "SINGLE_VLAN"
,    MultiVlan = "MULTI_VLAN"
}


// InstanceConfig
/** 
 * Configuration parameters for a new instance.
**/
export class InstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNetworksEnabled" })
  accountNetworksEnabled?: boolean;

  @Metadata({ data: "json, name=clientNetwork" })
  clientNetwork?: NetworkAddress;

  @Metadata({ data: "json, name=hyperthreading" })
  hyperthreading?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=logicalInterfaces", elemType: shared.GoogleCloudBaremetalsolutionV2LogicalInterface })
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: InstanceConfigNetworkConfigEnum;

  @Metadata({ data: "json, name=networkTemplate" })
  networkTemplate?: string;

  @Metadata({ data: "json, name=osImage" })
  osImage?: string;

  @Metadata({ data: "json, name=privateNetwork" })
  privateNetwork?: NetworkAddress;

  @Metadata({ data: "json, name=userNote" })
  userNote?: string;
}
