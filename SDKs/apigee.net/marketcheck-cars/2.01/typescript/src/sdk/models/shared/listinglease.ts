import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListingLease extends SpeakeasyBase {
  @Metadata({ data: "json, name=down_payment" })
  downPayment?: number;

  @Metadata({ data: "json, name=estimated_monthly_payment" })
  estimatedMonthlyPayment?: number;

  @Metadata({ data: "json, name=lease_term" })
  leaseTerm?: number;
}
