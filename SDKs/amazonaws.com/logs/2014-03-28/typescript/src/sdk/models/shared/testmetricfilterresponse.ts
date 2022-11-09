import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricFilterMatchRecord } from "./metricfiltermatchrecord";


export class TestMetricFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matches", elemType: shared.MetricFilterMatchRecord })
  matches?: MetricFilterMatchRecord[];
}
