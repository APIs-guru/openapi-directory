import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeRangeEnum } from "./timerangeenum";
import { UsageTotal } from "./usagetotal";



export class GetUsageTotalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: TimeRangeEnum;

  @SpeakeasyMetadata({ data: "json, name=usageTotals", elemType: UsageTotal })
  usageTotals?: UsageTotal[];
}
