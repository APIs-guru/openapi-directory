import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
/**
 * An object used to store information about the Value or Label detected by Amazon Textract.
**/
export declare class ExpenseDetection extends SpeakeasyBase {
    confidence?: number;
    geometry?: Geometry;
    text?: string;
}
