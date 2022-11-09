import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DistanceUnitEnum } from "./distanceunitenum";
/**
 * A summary of the calculated route.
**/
export declare class CalculateRouteSummary extends SpeakeasyBase {
    dataSource: string;
    distance: number;
    distanceUnit: DistanceUnitEnum;
    durationSeconds: number;
    routeBBox: number[];
}
