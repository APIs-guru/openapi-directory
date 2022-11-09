import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PackagesBillingUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=included_gigabytes_bandwidth" })
  includedGigabytesBandwidth: number;

  @Metadata({ data: "json, name=total_gigabytes_bandwidth_used" })
  totalGigabytesBandwidthUsed: number;

  @Metadata({ data: "json, name=total_paid_gigabytes_bandwidth_used" })
  totalPaidGigabytesBandwidthUsed: number;
}
