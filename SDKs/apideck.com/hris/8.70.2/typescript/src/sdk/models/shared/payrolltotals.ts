import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayrollTotals extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_amount" })
  checkAmount?: number;

  @Metadata({ data: "json, name=company_debit" })
  companyDebit?: number;

  @Metadata({ data: "json, name=employee_benefit_deductions" })
  employeeBenefitDeductions?: number;

  @Metadata({ data: "json, name=employee_taxes" })
  employeeTaxes?: number;

  @Metadata({ data: "json, name=employer_benefit_contributions" })
  employerBenefitContributions?: number;

  @Metadata({ data: "json, name=employer_taxes" })
  employerTaxes?: number;

  @Metadata({ data: "json, name=gross_pay" })
  grossPay?: number;

  @Metadata({ data: "json, name=net_pay" })
  netPay?: number;

  @Metadata({ data: "json, name=tax_debit" })
  taxDebit?: number;
}
