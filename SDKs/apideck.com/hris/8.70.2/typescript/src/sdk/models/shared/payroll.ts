import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Compensation } from "./compensation";
import { PayrollTotals } from "./payrolltotals";


export class Payroll extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_date" })
  checkDate: string;

  @Metadata({ data: "json, name=company_id" })
  companyId?: string;

  @Metadata({ data: "json, name=compensations", elemType: shared.Compensation })
  compensations?: Compensation[];

  @Metadata({ data: "json, name=end_date" })
  endDate: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=processed" })
  processed: boolean;

  @Metadata({ data: "json, name=processed_date" })
  processedDate?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate: string;

  @Metadata({ data: "json, name=totals" })
  totals?: PayrollTotals;
}
