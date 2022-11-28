import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.
**/
export declare class ForecastStatistics extends SpeakeasyBase {
    faultCountHigh?: number;
    faultCountLow?: number;
}
