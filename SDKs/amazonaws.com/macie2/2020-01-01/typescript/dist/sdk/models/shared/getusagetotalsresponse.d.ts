import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRangeEnum } from "./timerangeenum";
import { UsageTotal } from "./usagetotal";
export declare class GetUsageTotalsResponse extends SpeakeasyBase {
    timeRange?: TimeRangeEnum;
    usageTotals?: UsageTotal[];
}
