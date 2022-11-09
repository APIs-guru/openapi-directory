import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeRangeEnum } from "./timerangeenum";
import { UsageTotal } from "./usagetotal";


export class GetUsageTotalsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeRange" })
  timeRange?: TimeRangeEnum;

  @Metadata({ data: "json, name=usageTotals", elemType: shared.UsageTotal })
  usageTotals?: UsageTotal[];
}
