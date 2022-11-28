import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CanaryRun } from "./canaryrun";



// CanaryLastRun
/** 
 * This structure contains information about the most recent run of a single canary.
**/
export class CanaryLastRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CanaryName" })
  canaryName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastRun" })
  lastRun?: CanaryRun;
}
