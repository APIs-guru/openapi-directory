import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
**/
export declare class Alarm extends SpeakeasyBase {
    arn?: string;
    comparisonOperator?: ComparisonOperatorEnum;
    contactProtocols?: ContactProtocolEnum[];
    createdAt?: Date;
    datapointsToAlarm?: number;
    evaluationPeriods?: number;
    location?: ResourceLocation;
    metricName?: MetricNameEnum;
    monitoredResourceInfo?: MonitoredResourceInfo;
    name?: string;
    notificationEnabled?: boolean;
    notificationTriggers?: AlarmStateEnum[];
    period?: number;
    resourceType?: ResourceTypeEnum;
    state?: AlarmStateEnum;
    statistic?: MetricStatisticEnum;
    supportCode?: string;
    threshold?: number;
    treatMissingData?: TreatMissingDataEnum;
    unit?: MetricUnitEnum;
}
