import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { ResourceLocation } from "./resourcelocation";
import { MetricNameEnum } from "./metricnameenum";
import { MonitoredResourceInfo } from "./monitoredresourceinfo";
import { AlarmStateEnum } from "./alarmstateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { AlarmStateEnum } from "./alarmstateenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";
import { MetricUnitEnum } from "./metricunitenum";


// Alarm
/** 
 * <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
**/
export class Alarm extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=comparisonOperator" })
  comparisonOperator?: ComparisonOperatorEnum;

  @Metadata({ data: "json, name=contactProtocols" })
  contactProtocols?: ContactProtocolEnum[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=datapointsToAlarm" })
  datapointsToAlarm?: number;

  @Metadata({ data: "json, name=evaluationPeriods" })
  evaluationPeriods?: number;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=metricName" })
  metricName?: MetricNameEnum;

  @Metadata({ data: "json, name=monitoredResourceInfo" })
  monitoredResourceInfo?: MonitoredResourceInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationEnabled" })
  notificationEnabled?: boolean;

  @Metadata({ data: "json, name=notificationTriggers" })
  notificationTriggers?: AlarmStateEnum[];

  @Metadata({ data: "json, name=period" })
  period?: number;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=state" })
  state?: AlarmStateEnum;

  @Metadata({ data: "json, name=statistic" })
  statistic?: MetricStatisticEnum;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=threshold" })
  threshold?: number;

  @Metadata({ data: "json, name=treatMissingData" })
  treatMissingData?: TreatMissingDataEnum;

  @Metadata({ data: "json, name=unit" })
  unit?: MetricUnitEnum;
}
