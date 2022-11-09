import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListingFinance extends SpeakeasyBase {
  @Metadata({ data: "json, name=down_payment" })
  downPayment?: number;

  @Metadata({ data: "json, name=down_payment_percentage" })
  downPaymentPercentage?: number;

  @Metadata({ data: "json, name=estimated_monthly_payment" })
  estimatedMonthlyPayment?: number;

  @Metadata({ data: "json, name=loan_apr" })
  loanApr?: number;

  @Metadata({ data: "json, name=loan_term" })
  loanTerm?: number;
}
