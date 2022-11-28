import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShutdownEventConfiguration } from "./shutdowneventconfiguration";



// LifecycleEventConfiguration
/** 
 * Specifies the lifecycle event configuration
**/
export class LifecycleEventConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Shutdown" })
  shutdown?: ShutdownEventConfiguration;
}
