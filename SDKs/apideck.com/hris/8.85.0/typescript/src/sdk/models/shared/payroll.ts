import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Compensation } from "./compensation";
import { PayrollTotals } from "./payrolltotals";



export class Payroll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_date" })
  checkDate: string;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=compensations", elemType: Compensation })
  compensations?: Compensation[];

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=processed" })
  processed: boolean;

  @SpeakeasyMetadata({ data: "json, name=processed_date" })
  processedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "json, name=totals" })
  totals?: PayrollTotals;
}
