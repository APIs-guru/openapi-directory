import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemEventSummary } from "./opsitemeventsummary";
export declare class ListOpsItemEventsResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: OpsItemEventSummary[];
}
