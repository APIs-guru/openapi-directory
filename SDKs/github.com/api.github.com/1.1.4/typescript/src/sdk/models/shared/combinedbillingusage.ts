import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CombinedBillingUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days_left_in_billing_cycle" })
  daysLeftInBillingCycle: number;

  @SpeakeasyMetadata({ data: "json, name=estimated_paid_storage_for_month" })
  estimatedPaidStorageForMonth: number;

  @SpeakeasyMetadata({ data: "json, name=estimated_storage_for_month" })
  estimatedStorageForMonth: number;
}
