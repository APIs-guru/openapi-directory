import { SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlDataType } from "./standardsqldatatype";
/**
 * A field or a column.
**/
export declare class StandardSqlField extends SpeakeasyBase {
    name?: string;
    type?: StandardSqlDataType;
}
