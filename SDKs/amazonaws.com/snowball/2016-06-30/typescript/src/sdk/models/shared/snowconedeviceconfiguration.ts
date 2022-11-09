import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WirelessConnection } from "./wirelessconnection";


// SnowconeDeviceConfiguration
/** 
 * Specifies the device configuration for an AWS Snowcone job. 
**/
export class SnowconeDeviceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=WirelessConnection" })
  wirelessConnection?: WirelessConnection;
}
