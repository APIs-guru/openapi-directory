import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsBillingUsageMinutesUsedBreakdown extends SpeakeasyBase {
  @Metadata({ data: "json, name=MACOS" })
  macos?: number;

  @Metadata({ data: "json, name=UBUNTU" })
  ubuntu?: number;

  @Metadata({ data: "json, name=WINDOWS" })
  windows?: number;
}


export class ActionsBillingUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=included_minutes" })
  includedMinutes: number;

  @Metadata({ data: "json, name=minutes_used_breakdown" })
  minutesUsedBreakdown: ActionsBillingUsageMinutesUsedBreakdown;

  @Metadata({ data: "json, name=total_minutes_used" })
  totalMinutesUsed: number;

  @Metadata({ data: "json, name=total_paid_minutes_used" })
  totalPaidMinutesUsed: number;
}
