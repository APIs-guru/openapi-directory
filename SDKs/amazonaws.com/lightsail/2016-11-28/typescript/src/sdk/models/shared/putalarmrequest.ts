import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { MetricNameEnum } from "./metricnameenum";
import { AlarmStateEnum } from "./alarmstateenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";


export class PutAlarmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmName" })
  alarmName: string;

  @Metadata({ data: "json, name=comparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;

  @Metadata({ data: "json, name=contactProtocols" })
  contactProtocols?: ContactProtocolEnum[];

  @Metadata({ data: "json, name=datapointsToAlarm" })
  datapointsToAlarm?: number;

  @Metadata({ data: "json, name=evaluationPeriods" })
  evaluationPeriods: number;

  @Metadata({ data: "json, name=metricName" })
  metricName: MetricNameEnum;

  @Metadata({ data: "json, name=monitoredResourceName" })
  monitoredResourceName: string;

  @Metadata({ data: "json, name=notificationEnabled" })
  notificationEnabled?: boolean;

  @Metadata({ data: "json, name=notificationTriggers" })
  notificationTriggers?: AlarmStateEnum[];

  @Metadata({ data: "json, name=threshold" })
  threshold: number;

  @Metadata({ data: "json, name=treatMissingData" })
  treatMissingData?: TreatMissingDataEnum;
}
