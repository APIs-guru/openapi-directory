import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
/**
 * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
**/
export declare class CustomLevel extends SpeakeasyBase {
    expr?: Expr;
}
