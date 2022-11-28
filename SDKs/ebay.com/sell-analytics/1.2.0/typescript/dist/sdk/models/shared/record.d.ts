import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * Type that defines the fields of the individual record of the report.
**/
export declare class Record extends SpeakeasyBase {
    dimensionValues?: Value[];
    metricValues?: Value[];
}
