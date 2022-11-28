import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListingFinance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=down_payment" })
  downPayment?: number;

  @SpeakeasyMetadata({ data: "json, name=down_payment_percentage" })
  downPaymentPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=estimated_monthly_payment" })
  estimatedMonthlyPayment?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_apr" })
  loanApr?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_term" })
  loanTerm?: number;
}
