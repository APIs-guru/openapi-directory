import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CombinedBillingUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=days_left_in_billing_cycle" })
  daysLeftInBillingCycle: number;

  @Metadata({ data: "json, name=estimated_paid_storage_for_month" })
  estimatedPaidStorageForMonth: number;

  @Metadata({ data: "json, name=estimated_storage_for_month" })
  estimatedStorageForMonth: number;
}
