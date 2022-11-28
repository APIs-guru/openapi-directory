import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnowconeDeviceConfiguration } from "./snowconedeviceconfiguration";



// DeviceConfiguration
/** 
 * The container for <code>SnowconeDeviceConfiguration</code>. 
**/
export class DeviceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnowconeDeviceConfiguration" })
  snowconeDeviceConfiguration?: SnowconeDeviceConfiguration;
}
