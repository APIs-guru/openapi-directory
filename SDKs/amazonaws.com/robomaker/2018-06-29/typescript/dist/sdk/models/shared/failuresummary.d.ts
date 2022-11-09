import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldFailure } from "./worldfailure";
/**
 * Information about worlds that failed.
**/
export declare class FailureSummary extends SpeakeasyBase {
    failures?: WorldFailure[];
    totalFailureCount?: number;
}
