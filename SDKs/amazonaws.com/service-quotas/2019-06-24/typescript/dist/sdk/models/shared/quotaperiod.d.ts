import { SpeakeasyBase } from "../../../internal/utils";
import { PeriodUnitEnum } from "./periodunitenum";
/**
 * Information about the quota period.
**/
export declare class QuotaPeriod extends SpeakeasyBase {
    periodUnit?: PeriodUnitEnum;
    periodValue?: number;
}
