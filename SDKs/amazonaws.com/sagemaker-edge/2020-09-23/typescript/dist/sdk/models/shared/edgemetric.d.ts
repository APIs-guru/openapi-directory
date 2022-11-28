import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information required for edge device metrics.
**/
export declare class EdgeMetric extends SpeakeasyBase {
    dimension?: string;
    metricName?: string;
    timestamp?: Date;
    value?: number;
}
