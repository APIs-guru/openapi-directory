import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricStreamEntry } from "./metricstreamentry";



export class ListMetricStreamsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MetricStreamEntry })
  entries?: MetricStreamEntry[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
