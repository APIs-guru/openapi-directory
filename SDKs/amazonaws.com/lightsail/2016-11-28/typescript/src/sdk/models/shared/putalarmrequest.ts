import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { MetricNameEnum } from "./metricnameenum";
import { AlarmStateEnum } from "./alarmstateenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";



export class PutAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmName" })
  alarmName: string;

  @SpeakeasyMetadata({ data: "json, name=comparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=contactProtocols" })
  contactProtocols?: ContactProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=datapointsToAlarm" })
  datapointsToAlarm?: number;

  @SpeakeasyMetadata({ data: "json, name=evaluationPeriods" })
  evaluationPeriods: number;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: MetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=monitoredResourceName" })
  monitoredResourceName: string;

  @SpeakeasyMetadata({ data: "json, name=notificationEnabled" })
  notificationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notificationTriggers" })
  notificationTriggers?: AlarmStateEnum[];

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold: number;

  @SpeakeasyMetadata({ data: "json, name=treatMissingData" })
  treatMissingData?: TreatMissingDataEnum;
}
