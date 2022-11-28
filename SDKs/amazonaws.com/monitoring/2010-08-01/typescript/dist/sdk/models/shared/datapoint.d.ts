import { SpeakeasyBase } from "../../../internal/utils";
import { StandardUnitEnum } from "./standardunitenum";
/**
 * Encapsulates the statistical data that CloudWatch computes from metric data.
**/
export declare class Datapoint extends SpeakeasyBase {
    average?: number;
    extendedStatistics?: Map<string, number>;
    maximum?: number;
    minimum?: number;
    sampleCount?: number;
    sum?: number;
    timestamp?: Date;
    unit?: StandardUnitEnum;
}
