import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProfitAndLossExpenses extends SpeakeasyBase {
    records: any[];
    total: number;
}
export declare class ProfitAndLossGrossProfit extends SpeakeasyBase {
    records: any[];
    total: number;
}
export declare class ProfitAndLossIncome extends SpeakeasyBase {
    records: any[];
    total: number;
}
export declare class ProfitAndLossNetIncome extends SpeakeasyBase {
    records: any[];
    total: number;
}
export declare class ProfitAndLossNetOperatingIncome extends SpeakeasyBase {
    records: any[];
    total: number;
}
export declare class ProfitAndLoss extends SpeakeasyBase {
    currency: string;
    customerId?: string;
    endDate?: string;
    expenses: ProfitAndLossExpenses;
    grossProfit?: ProfitAndLossGrossProfit;
    id?: string;
    income: ProfitAndLossIncome;
    netIncome?: ProfitAndLossNetIncome;
    netOperatingIncome?: ProfitAndLossNetOperatingIncome;
    reportName: string;
    startDate?: string;
}
