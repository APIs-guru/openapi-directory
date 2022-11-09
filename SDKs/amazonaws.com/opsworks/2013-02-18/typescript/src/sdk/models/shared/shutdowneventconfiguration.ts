import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShutdownEventConfiguration
/** 
 * The Shutdown event configuration.
**/
export class ShutdownEventConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DelayUntilElbConnectionsDrained" })
  delayUntilElbConnectionsDrained?: boolean;

  @Metadata({ data: "json, name=ExecutionTimeout" })
  executionTimeout?: number;
}
