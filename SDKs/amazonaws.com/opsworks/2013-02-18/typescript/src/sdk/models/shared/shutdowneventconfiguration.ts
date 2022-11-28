import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShutdownEventConfiguration
/** 
 * The Shutdown event configuration.
**/
export class ShutdownEventConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DelayUntilElbConnectionsDrained" })
  delayUntilElbConnectionsDrained?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExecutionTimeout" })
  executionTimeout?: number;
}
