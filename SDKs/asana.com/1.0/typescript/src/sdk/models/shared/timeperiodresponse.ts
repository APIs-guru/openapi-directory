import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePeriodCompact } from "./timeperiodcompact";


export enum TimePeriodResponsePeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}


export class TimePeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_on" })
  endOn?: string;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: TimePeriodCompact;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: TimePeriodResponsePeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: string;
}
