import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricFilterMatchRecord } from "./metricfiltermatchrecord";



export class TestMetricFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matches", elemType: MetricFilterMatchRecord })
  matches?: MetricFilterMatchRecord[];
}
