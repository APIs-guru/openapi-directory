import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PeriodUnitEnum } from "./periodunitenum";


// QuotaPeriod
/** 
 * Information about the quota period.
**/
export class QuotaPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=PeriodUnit" })
  periodUnit?: PeriodUnitEnum;

  @Metadata({ data: "json, name=PeriodValue" })
  periodValue?: number;
}
