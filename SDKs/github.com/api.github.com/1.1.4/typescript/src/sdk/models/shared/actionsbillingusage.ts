import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsBillingUsageMinutesUsedBreakdown extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MACOS" })
  macos?: number;

  @SpeakeasyMetadata({ data: "json, name=UBUNTU" })
  ubuntu?: number;

  @SpeakeasyMetadata({ data: "json, name=WINDOWS" })
  windows?: number;
}


export class ActionsBillingUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=included_minutes" })
  includedMinutes: number;

  @SpeakeasyMetadata({ data: "json, name=minutes_used_breakdown" })
  minutesUsedBreakdown: ActionsBillingUsageMinutesUsedBreakdown;

  @SpeakeasyMetadata({ data: "json, name=total_minutes_used" })
  totalMinutesUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_paid_minutes_used" })
  totalPaidMinutesUsed: number;
}
