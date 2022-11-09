import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkAddress } from "./networkaddress";
import { NetworkAddress } from "./networkaddress";


// InstanceConfig
/** 
 * Configuration parameters for a new instance.
**/
export class InstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientNetwork" })
  clientNetwork?: NetworkAddress;

  @Metadata({ data: "json, name=hyperthreading" })
  hyperthreading?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=osImage" })
  osImage?: string;

  @Metadata({ data: "json, name=privateNetwork" })
  privateNetwork?: NetworkAddress;

  @Metadata({ data: "json, name=userNote" })
  userNote?: string;
}
