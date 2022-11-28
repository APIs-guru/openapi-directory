import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
**/
export declare class DataPoint extends SpeakeasyBase {
    timestamp: Date;
    value: number;
}
