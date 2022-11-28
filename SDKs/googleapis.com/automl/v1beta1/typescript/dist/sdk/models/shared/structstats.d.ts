import { SpeakeasyBase } from "../../../internal/utils";
import { DataStats } from "./datastats";
/**
 * The data statistics of a series of STRUCT values.
**/
export declare class StructStats extends SpeakeasyBase {
    fieldStats?: Map<string, DataStats>;
}
