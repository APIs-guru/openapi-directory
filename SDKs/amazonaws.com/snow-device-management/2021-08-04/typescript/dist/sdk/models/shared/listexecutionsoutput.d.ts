import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionSummary } from "./executionsummary";
export declare class ListExecutionsOutput extends SpeakeasyBase {
    executions?: ExecutionSummary[];
    nextToken?: string;
}
