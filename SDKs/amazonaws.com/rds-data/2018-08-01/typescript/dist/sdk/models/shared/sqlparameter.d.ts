import { SpeakeasyBase } from "../../../internal/utils";
import { TypeHintEnum } from "./typehintenum";
import { Field } from "./field";
/**
 * A parameter used in a SQL statement.
**/
export declare class SqlParameter extends SpeakeasyBase {
    name?: string;
    typeHint?: TypeHintEnum;
    value?: Field;
}
