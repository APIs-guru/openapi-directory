import { SpeakeasyBase } from "../../../internal/utils";
import { Entry } from "./entry";
/**
 * A single row in the confusion matrix.
**/
export declare class Row extends SpeakeasyBase {
    actualLabel?: string;
    entries?: Entry[];
}
