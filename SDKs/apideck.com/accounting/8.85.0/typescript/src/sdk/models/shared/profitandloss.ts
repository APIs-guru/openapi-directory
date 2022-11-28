import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfitAndLossSection } from "./profitandlosssection";
import { ProfitAndLossRecord } from "./profitandlossrecord";



export class ProfitAndLossExpenses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=records" })
  records: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossGrossProfit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=records" })
  records: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossIncome extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=records" })
  records: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossNetIncome extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=records" })
  records: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLossNetOperatingIncome extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=records" })
  records: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ProfitAndLoss extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=expenses" })
  expenses: ProfitAndLossExpenses;

  @SpeakeasyMetadata({ data: "json, name=gross_profit" })
  grossProfit?: ProfitAndLossGrossProfit;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=income" })
  income: ProfitAndLossIncome;

  @SpeakeasyMetadata({ data: "json, name=net_income" })
  netIncome?: ProfitAndLossNetIncome;

  @SpeakeasyMetadata({ data: "json, name=net_operating_income" })
  netOperatingIncome?: ProfitAndLossNetOperatingIncome;

  @SpeakeasyMetadata({ data: "json, name=report_name" })
  reportName: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;
}
