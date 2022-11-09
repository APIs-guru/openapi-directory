import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationalDatabaseMetricNameEnum } from "./relationaldatabasemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";


export class GetRelationalDatabaseMetricDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=metricName" })
  metricName: RelationalDatabaseMetricNameEnum;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @Metadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
