import { SpeakeasyBase } from "../../../internal/utils";
import { Compensation } from "./compensation";
import { PayrollTotals } from "./payrolltotals";
export declare class Payroll extends SpeakeasyBase {
    checkDate: string;
    companyId?: string;
    compensations?: Compensation[];
    endDate: string;
    id: string;
    processed: boolean;
    processedDate?: string;
    startDate: string;
    totals?: PayrollTotals;
}
