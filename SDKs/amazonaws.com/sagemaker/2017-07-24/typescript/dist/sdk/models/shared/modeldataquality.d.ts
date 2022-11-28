import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsSource } from "./metricssource";
/**
 * Data quality constraints and statistics for a model.
**/
export declare class ModelDataQuality extends SpeakeasyBase {
    constraints?: MetricsSource;
    statistics?: MetricsSource;
}
