import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Condition } from "./condition";
export declare enum BasicLevelCombiningFunctionEnum {
    And = "AND",
    Or = "OR"
}
/**
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
export declare class BasicLevel extends SpeakeasyBase {
    combiningFunction?: BasicLevelCombiningFunctionEnum;
    conditions?: Condition[];
}
