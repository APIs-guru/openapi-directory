import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardSqlDataType } from "./standardsqldatatype";

export enum ArgumentArgumentKindEnum {
    ArgumentKindUnspecified = "ARGUMENT_KIND_UNSPECIFIED"
,    FixedType = "FIXED_TYPE"
,    AnyType = "ANY_TYPE"
}

export enum ArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    In = "IN"
,    Out = "OUT"
,    Inout = "INOUT"
}


// Argument
/** 
 * Input/output argument of a function or a stored procedure.
**/
export class Argument extends SpeakeasyBase {
  @Metadata({ data: "json, name=argumentKind" })
  argumentKind?: ArgumentArgumentKindEnum;

  @Metadata({ data: "json, name=dataType" })
  dataType?: StandardSqlDataType;

  @Metadata({ data: "json, name=mode" })
  mode?: ArgumentModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
