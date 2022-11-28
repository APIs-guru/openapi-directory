import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayrollTotals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_amount" })
  checkAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=company_debit" })
  companyDebit?: number;

  @SpeakeasyMetadata({ data: "json, name=employee_benefit_deductions" })
  employeeBenefitDeductions?: number;

  @SpeakeasyMetadata({ data: "json, name=employee_taxes" })
  employeeTaxes?: number;

  @SpeakeasyMetadata({ data: "json, name=employer_benefit_contributions" })
  employerBenefitContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=employer_taxes" })
  employerTaxes?: number;

  @SpeakeasyMetadata({ data: "json, name=gross_pay" })
  grossPay?: number;

  @SpeakeasyMetadata({ data: "json, name=net_pay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_debit" })
  taxDebit?: number;
}
