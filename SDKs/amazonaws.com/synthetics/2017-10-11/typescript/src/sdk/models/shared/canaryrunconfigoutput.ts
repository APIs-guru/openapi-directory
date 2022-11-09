import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CanaryRunConfigOutput
/** 
 * A structure that contains information about a canary run.
**/
export class CanaryRunConfigOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveTracing" })
  activeTracing?: boolean;

  @Metadata({ data: "json, name=MemoryInMB" })
  memoryInMb?: number;

  @Metadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}
