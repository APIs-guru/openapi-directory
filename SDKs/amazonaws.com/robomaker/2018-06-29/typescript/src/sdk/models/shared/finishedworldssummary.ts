import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureSummary } from "./failuresummary";



// FinishedWorldsSummary
/** 
 * Information about worlds that finished.
**/
export class FinishedWorldsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureSummary" })
  failureSummary?: FailureSummary;

  @SpeakeasyMetadata({ data: "json, name=finishedCount" })
  finishedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=succeededWorlds" })
  succeededWorlds?: string[];
}
