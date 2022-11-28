import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeAlarm } from "./compositealarm";
import { MetricAlarm } from "./metricalarm";



export class DescribeAlarmsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CompositeAlarm })
  compositeAlarms?: CompositeAlarm[];

  @SpeakeasyMetadata({ elemType: MetricAlarm })
  metricAlarms?: MetricAlarm[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
