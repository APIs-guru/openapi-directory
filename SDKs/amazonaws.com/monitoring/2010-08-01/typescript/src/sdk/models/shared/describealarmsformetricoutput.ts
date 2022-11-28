import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricAlarm } from "./metricalarm";



export class DescribeAlarmsForMetricOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MetricAlarm })
  metricAlarms?: MetricAlarm[];
}
