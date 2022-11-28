import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CanaryRunConfigOutput
/** 
 * A structure that contains information about a canary run.
**/
export class CanaryRunConfigOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveTracing" })
  activeTracing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MemoryInMB" })
  memoryInMb?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}
