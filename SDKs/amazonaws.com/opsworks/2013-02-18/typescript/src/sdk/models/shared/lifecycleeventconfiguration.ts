import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShutdownEventConfiguration } from "./shutdowneventconfiguration";


// LifecycleEventConfiguration
/** 
 * Specifies the lifecycle event configuration
**/
export class LifecycleEventConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Shutdown" })
  shutdown?: ShutdownEventConfiguration;
}
