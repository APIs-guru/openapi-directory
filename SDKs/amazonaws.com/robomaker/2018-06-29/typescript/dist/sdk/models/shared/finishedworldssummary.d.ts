import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureSummary } from "./failuresummary";
/**
 * Information about worlds that finished.
**/
export declare class FinishedWorldsSummary extends SpeakeasyBase {
    failureSummary?: FailureSummary;
    finishedCount?: number;
    succeededWorlds?: string[];
}
