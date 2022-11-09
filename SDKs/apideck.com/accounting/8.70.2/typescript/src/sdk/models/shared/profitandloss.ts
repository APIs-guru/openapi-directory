import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProfitAndLossSection } from "./profitandlosssection";
import { ProfitAndLossRecord } from "./profitandlossrecord";
import { ProfitAndLossSection } from "./profitandlosssection";
import { ProfitAndLossRecord } from "./profitandlossrecord";
import { ProfitAndLossSection } from "./profitandlosssection";
import { ProfitAndLossRecord } from "./profitandlossrecord";
import { ProfitAndLossSection } from "./profitandlosssection";
import { ProfitAndLossRecord } from "./profitandlossrecord";
import { ProfitAndLossSection } from "./profitandlosssection";
import { ProfitAndLossRecord } from "./profitandlossrecord";


export class ProfitAndLossExpenses extends SpeakeasyBase {
  @Metadata({ data: "json, name=records" })
  records: any[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossGrossProfit extends SpeakeasyBase {
  @Metadata({ data: "json, name=records" })
  records: any[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossIncome extends SpeakeasyBase {
  @Metadata({ data: "json, name=records" })
  records: any[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossNetIncome extends SpeakeasyBase {
  @Metadata({ data: "json, name=records" })
  records: any[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossNetOperatingIncome extends SpeakeasyBase {
  @Metadata({ data: "json, name=records" })
  records: any[];

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLoss extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=expenses" })
  expenses: ProfitAndLossExpenses;

  @Metadata({ data: "json, name=gross_profit" })
  grossProfit?: ProfitAndLossGrossProfit;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=income" })
  income: ProfitAndLossIncome;

  @Metadata({ data: "json, name=net_income" })
  netIncome?: ProfitAndLossNetIncome;

  @Metadata({ data: "json, name=net_operating_income" })
  netOperatingIncome?: ProfitAndLossNetOperatingIncome;

  @Metadata({ data: "json, name=report_name" })
  reportName: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;
}
