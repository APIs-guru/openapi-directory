import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BalanceSheetFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, name=start_date" })
  startDate?: string;
}
