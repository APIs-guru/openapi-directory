import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WirelessConnection } from "./wirelessconnection";



// SnowconeDeviceConfiguration
/** 
 * Specifies the device configuration for an AWS Snowcone job. 
**/
export class SnowconeDeviceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WirelessConnection" })
  wirelessConnection?: WirelessConnection;
}
