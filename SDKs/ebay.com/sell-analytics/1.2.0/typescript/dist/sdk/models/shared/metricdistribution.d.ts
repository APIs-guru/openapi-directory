import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
/**
 * This complex data type describes the metric distribution by basis.
**/
export declare class MetricDistribution extends SpeakeasyBase {
    basis?: string;
    data?: Distribution[];
}
