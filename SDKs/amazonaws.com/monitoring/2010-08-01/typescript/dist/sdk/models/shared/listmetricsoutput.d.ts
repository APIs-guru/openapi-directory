import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
export declare class ListMetricsOutput extends SpeakeasyBase {
    metrics?: Metric[];
    nextToken?: string;
}
