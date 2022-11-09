import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CpuOptions
/** 
 * The options for how a device's CPU is configured.
**/
export class CpuOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=coreCount" })
  coreCount?: number;

  @Metadata({ data: "json, name=threadsPerCore" })
  threadsPerCore?: number;
}
