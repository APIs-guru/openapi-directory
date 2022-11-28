import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { Dimension } from "./dimension";
import { MetricDataQuery } from "./metricdataquery";
import { StateValueEnum } from "./statevalueenum";
import { StatisticEnum } from "./statisticenum";
import { StandardUnitEnum } from "./standardunitenum";
/**
 * The details about a metric alarm.
**/
export declare class MetricAlarm extends SpeakeasyBase {
    actionsEnabled?: boolean;
    alarmActions?: string[];
    alarmArn?: string;
    alarmConfigurationUpdatedTimestamp?: Date;
    alarmDescription?: string;
    alarmName?: string;
    comparisonOperator?: ComparisonOperatorEnum;
    datapointsToAlarm?: number;
    dimensions?: Dimension[];
    evaluateLowSampleCountPercentile?: string;
    evaluationPeriods?: number;
    extendedStatistic?: string;
    insufficientDataActions?: string[];
    metricName?: string;
    metrics?: MetricDataQuery[];
    namespace?: string;
    okActions?: string[];
    period?: number;
    stateReason?: string;
    stateReasonData?: string;
    stateUpdatedTimestamp?: Date;
    stateValue?: StateValueEnum;
    statistic?: StatisticEnum;
    threshold?: number;
    thresholdMetricId?: string;
    treatMissingData?: string;
    unit?: StandardUnitEnum;
}
