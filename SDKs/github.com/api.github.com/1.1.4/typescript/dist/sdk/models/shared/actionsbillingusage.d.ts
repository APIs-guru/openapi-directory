import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsBillingUsageMinutesUsedBreakdown extends SpeakeasyBase {
    macos?: number;
    ubuntu?: number;
    windows?: number;
}
export declare class ActionsBillingUsage extends SpeakeasyBase {
    includedMinutes: number;
    minutesUsedBreakdown: ActionsBillingUsageMinutesUsedBreakdown;
    totalMinutesUsed: number;
    totalPaidMinutesUsed: number;
}
