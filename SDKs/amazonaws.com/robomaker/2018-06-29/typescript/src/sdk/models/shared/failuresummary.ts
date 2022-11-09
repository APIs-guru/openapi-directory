import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorldFailure } from "./worldfailure";


// FailureSummary
/** 
 * Information about worlds that failed.
**/
export class FailureSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.WorldFailure })
  failures?: WorldFailure[];

  @Metadata({ data: "json, name=totalFailureCount" })
  totalFailureCount?: number;
}
