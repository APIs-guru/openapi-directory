import { SpeakeasyBase } from "../../../internal/utils";
import { SlotSummary } from "./slotsummary";
export declare class ListSlotsResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    intentId?: string;
    localeId?: string;
    nextToken?: string;
    slotSummaries?: SlotSummary[];
}
