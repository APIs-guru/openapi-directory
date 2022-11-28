import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkAddress } from "./networkaddress";



// InstanceConfig
/** 
 * Configuration parameters for a new instance.
**/
export class InstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientNetwork" })
  clientNetwork?: NetworkAddress;

  @SpeakeasyMetadata({ data: "json, name=hyperthreading" })
  hyperthreading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=osImage" })
  osImage?: string;

  @SpeakeasyMetadata({ data: "json, name=privateNetwork" })
  privateNetwork?: NetworkAddress;

  @SpeakeasyMetadata({ data: "json, name=userNote" })
  userNote?: string;
}
