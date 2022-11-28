import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { Dimension } from "./dimension";
import { MetricDataQuery } from "./metricdataquery";
import { StateValueEnum } from "./statevalueenum";
import { StatisticEnum } from "./statisticenum";
import { StandardUnitEnum } from "./standardunitenum";



// MetricAlarm
/** 
 * The details about a metric alarm.
**/
export class MetricAlarm extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsEnabled?: boolean;

  @SpeakeasyMetadata()
  alarmActions?: string[];

  @SpeakeasyMetadata()
  alarmArn?: string;

  @SpeakeasyMetadata()
  alarmConfigurationUpdatedTimestamp?: Date;

  @SpeakeasyMetadata()
  alarmDescription?: string;

  @SpeakeasyMetadata()
  alarmName?: string;

  @SpeakeasyMetadata()
  comparisonOperator?: ComparisonOperatorEnum;

  @SpeakeasyMetadata()
  datapointsToAlarm?: number;

  @SpeakeasyMetadata({ elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata()
  evaluateLowSampleCountPercentile?: string;

  @SpeakeasyMetadata()
  evaluationPeriods?: number;

  @SpeakeasyMetadata()
  extendedStatistic?: string;

  @SpeakeasyMetadata()
  insufficientDataActions?: string[];

  @SpeakeasyMetadata()
  metricName?: string;

  @SpeakeasyMetadata({ elemType: MetricDataQuery })
  metrics?: MetricDataQuery[];

  @SpeakeasyMetadata()
  namespace?: string;

  @SpeakeasyMetadata()
  okActions?: string[];

  @SpeakeasyMetadata()
  period?: number;

  @SpeakeasyMetadata()
  stateReason?: string;

  @SpeakeasyMetadata()
  stateReasonData?: string;

  @SpeakeasyMetadata()
  stateUpdatedTimestamp?: Date;

  @SpeakeasyMetadata()
  stateValue?: StateValueEnum;

  @SpeakeasyMetadata()
  statistic?: StatisticEnum;

  @SpeakeasyMetadata()
  threshold?: number;

  @SpeakeasyMetadata()
  thresholdMetricId?: string;

  @SpeakeasyMetadata()
  treatMissingData?: string;

  @SpeakeasyMetadata()
  unit?: StandardUnitEnum;
}
