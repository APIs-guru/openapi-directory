import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldFailure } from "./worldfailure";



// FailureSummary
/** 
 * Information about worlds that failed.
**/
export class FailureSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: WorldFailure })
  failures?: WorldFailure[];

  @SpeakeasyMetadata({ data: "json, name=totalFailureCount" })
  totalFailureCount?: number;
}
