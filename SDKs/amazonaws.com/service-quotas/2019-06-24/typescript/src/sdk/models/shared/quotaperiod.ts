import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PeriodUnitEnum } from "./periodunitenum";



// QuotaPeriod
/** 
 * Information about the quota period.
**/
export class QuotaPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PeriodUnit" })
  periodUnit?: PeriodUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=PeriodValue" })
  periodValue?: number;
}
