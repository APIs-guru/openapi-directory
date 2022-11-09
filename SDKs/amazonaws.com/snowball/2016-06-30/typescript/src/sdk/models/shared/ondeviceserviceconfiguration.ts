import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NfsOnDeviceServiceConfiguration } from "./nfsondeviceserviceconfiguration";


// OnDeviceServiceConfiguration
/** 
 * An object that represents metadata and configuration settings for services on an AWS Snow Family device.
**/
export class OnDeviceServiceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=NFSOnDeviceService" })
  nfsOnDeviceService?: NfsOnDeviceServiceConfiguration;
}
