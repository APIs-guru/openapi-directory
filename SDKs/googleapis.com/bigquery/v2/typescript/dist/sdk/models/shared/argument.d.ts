import { SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlDataType } from "./standardsqldatatype";
export declare enum ArgumentArgumentKindEnum {
    ArgumentKindUnspecified = "ARGUMENT_KIND_UNSPECIFIED",
    FixedType = "FIXED_TYPE",
    AnyType = "ANY_TYPE"
}
export declare enum ArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    Inout = "INOUT"
}
/**
 * Input/output argument of a function or a stored procedure.
**/
export declare class Argument extends SpeakeasyBase {
    argumentKind?: ArgumentArgumentKindEnum;
    dataType?: StandardSqlDataType;
    mode?: ArgumentModeEnum;
    name?: string;
}
