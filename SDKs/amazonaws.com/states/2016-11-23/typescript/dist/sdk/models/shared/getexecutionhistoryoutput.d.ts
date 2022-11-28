import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEvent } from "./historyevent";
export declare class GetExecutionHistoryOutput extends SpeakeasyBase {
    events: HistoryEvent[];
    nextToken?: string;
}
