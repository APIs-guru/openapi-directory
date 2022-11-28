import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { ResourceLocation } from "./resourcelocation";
import { MetricNameEnum } from "./metricnameenum";
import { MonitoredResourceInfo } from "./monitoredresourceinfo";
import { AlarmStateEnum } from "./alarmstateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";
import { MetricUnitEnum } from "./metricunitenum";



// Alarm
/** 
 * <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
**/
export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=comparisonOperator" })
  comparisonOperator?: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=contactProtocols" })
  contactProtocols?: ContactProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=datapointsToAlarm" })
  datapointsToAlarm?: number;

  @SpeakeasyMetadata({ data: "json, name=evaluationPeriods" })
  evaluationPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: MetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=monitoredResourceInfo" })
  monitoredResourceInfo?: MonitoredResourceInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationEnabled" })
  notificationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notificationTriggers" })
  notificationTriggers?: AlarmStateEnum[];

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AlarmStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statistic" })
  statistic?: MetricStatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: number;

  @SpeakeasyMetadata({ data: "json, name=treatMissingData" })
  treatMissingData?: TreatMissingDataEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: MetricUnitEnum;
}
