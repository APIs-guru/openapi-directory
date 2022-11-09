import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureSummary } from "./failuresummary";


// FinishedWorldsSummary
/** 
 * Information about worlds that finished.
**/
export class FinishedWorldsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureSummary" })
  failureSummary?: FailureSummary;

  @Metadata({ data: "json, name=finishedCount" })
  finishedCount?: number;

  @Metadata({ data: "json, name=succeededWorlds" })
  succeededWorlds?: string[];
}
