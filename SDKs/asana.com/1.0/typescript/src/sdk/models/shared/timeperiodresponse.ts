import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimePeriodCompact } from "./timeperiodcompact";

export enum TimePeriodResponsePeriodEnum {
    Fy = "FY"
,    H1 = "H1"
,    H2 = "H2"
,    Q1 = "Q1"
,    Q2 = "Q2"
,    Q3 = "Q3"
,    Q4 = "Q4"
}


export class TimePeriodResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_on" })
  endOn?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: TimePeriodCompact;

  @Metadata({ data: "json, name=period" })
  period?: TimePeriodResponsePeriodEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: string;
}
