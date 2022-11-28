import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayrollsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=start_date" })
  startDate?: string;
}
