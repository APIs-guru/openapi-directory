import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListingLease extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=down_payment" })
  downPayment?: number;

  @SpeakeasyMetadata({ data: "json, name=estimated_monthly_payment" })
  estimatedMonthlyPayment?: number;

  @SpeakeasyMetadata({ data: "json, name=lease_term" })
  leaseTerm?: number;
}
