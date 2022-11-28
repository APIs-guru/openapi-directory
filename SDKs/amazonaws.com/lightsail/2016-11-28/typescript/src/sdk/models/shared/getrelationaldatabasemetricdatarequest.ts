import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseMetricNameEnum } from "./relationaldatabasemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";



export class GetRelationalDatabaseMetricDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: RelationalDatabaseMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
