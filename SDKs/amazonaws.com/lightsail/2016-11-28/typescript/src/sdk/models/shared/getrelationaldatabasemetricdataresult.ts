import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricDatapoint } from "./metricdatapoint";
import { RelationalDatabaseMetricNameEnum } from "./relationaldatabasemetricnameenum";


export class GetRelationalDatabaseMetricDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricData", elemType: shared.MetricDatapoint })
  metricData?: MetricDatapoint[];

  @Metadata({ data: "json, name=metricName" })
  metricName?: RelationalDatabaseMetricNameEnum;
}
