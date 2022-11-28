import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates.
**/
export declare class Dimension extends SpeakeasyBase {
    histogramBuckets?: string[];
    name?: string;
}
