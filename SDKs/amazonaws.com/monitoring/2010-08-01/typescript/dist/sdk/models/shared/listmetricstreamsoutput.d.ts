import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStreamEntry } from "./metricstreamentry";
export declare class ListMetricStreamsOutput extends SpeakeasyBase {
    entries?: MetricStreamEntry[];
    nextToken?: string;
}
