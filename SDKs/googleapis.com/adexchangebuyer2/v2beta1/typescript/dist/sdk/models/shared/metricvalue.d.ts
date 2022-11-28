import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
**/
export declare class MetricValue extends SpeakeasyBase {
    value?: string;
    variance?: string;
}
