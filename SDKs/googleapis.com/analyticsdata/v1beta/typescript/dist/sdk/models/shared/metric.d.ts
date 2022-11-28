import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.
**/
export declare class Metric extends SpeakeasyBase {
    expression?: string;
    invisible?: boolean;
    name?: string;
}
