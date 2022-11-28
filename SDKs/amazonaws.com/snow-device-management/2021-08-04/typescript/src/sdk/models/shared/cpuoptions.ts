import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CpuOptions
/** 
 * The options for how a device's CPU is configured.
**/
export class CpuOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coreCount" })
  coreCount?: number;

  @SpeakeasyMetadata({ data: "json, name=threadsPerCore" })
  threadsPerCore?: number;
}
