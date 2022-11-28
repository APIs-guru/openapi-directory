import { SpeakeasyBase } from "../../../internal/utils";
import { NumericValue } from "./numericvalue";
/**
 * To express that the result needs to be between two numbers (inclusive).
**/
export declare class BetweenFilter extends SpeakeasyBase {
    fromValue?: NumericValue;
    toValue?: NumericValue;
}
