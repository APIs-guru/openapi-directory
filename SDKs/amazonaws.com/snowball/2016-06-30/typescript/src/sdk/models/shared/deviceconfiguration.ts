import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnowconeDeviceConfiguration } from "./snowconedeviceconfiguration";


// DeviceConfiguration
/** 
 * The container for <code>SnowconeDeviceConfiguration</code>. 
**/
export class DeviceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnowconeDeviceConfiguration" })
  snowconeDeviceConfiguration?: SnowconeDeviceConfiguration;
}
