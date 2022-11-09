import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryRun } from "./canaryrun";


// CanaryLastRun
/** 
 * This structure contains information about the most recent run of a single canary.
**/
export class CanaryLastRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=CanaryName" })
  canaryName?: string;

  @Metadata({ data: "json, name=LastRun" })
  lastRun?: CanaryRun;
}
