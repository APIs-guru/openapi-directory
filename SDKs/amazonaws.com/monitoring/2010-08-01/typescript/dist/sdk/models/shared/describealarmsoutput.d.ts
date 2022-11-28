import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeAlarm } from "./compositealarm";
import { MetricAlarm } from "./metricalarm";
export declare class DescribeAlarmsOutput extends SpeakeasyBase {
    compositeAlarms?: CompositeAlarm[];
    metricAlarms?: MetricAlarm[];
    nextToken?: string;
}
