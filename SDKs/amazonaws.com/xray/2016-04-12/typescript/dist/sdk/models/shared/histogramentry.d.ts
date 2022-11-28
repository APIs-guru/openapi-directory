import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.
**/
export declare class HistogramEntry extends SpeakeasyBase {
    count?: number;
    value?: number;
}
