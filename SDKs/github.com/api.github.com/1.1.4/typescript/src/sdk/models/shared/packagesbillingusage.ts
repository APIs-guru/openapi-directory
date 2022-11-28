import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PackagesBillingUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=included_gigabytes_bandwidth" })
  includedGigabytesBandwidth: number;

  @SpeakeasyMetadata({ data: "json, name=total_gigabytes_bandwidth_used" })
  totalGigabytesBandwidthUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_paid_gigabytes_bandwidth_used" })
  totalPaidGigabytesBandwidthUsed: number;
}
