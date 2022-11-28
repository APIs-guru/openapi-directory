import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlDataType } from "./standardsqldatatype";


export enum ArgumentArgumentKindEnum {
    ArgumentKindUnspecified = "ARGUMENT_KIND_UNSPECIFIED",
    FixedType = "FIXED_TYPE",
    AnyType = "ANY_TYPE"
}

export enum ArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    Inout = "INOUT"
}


// Argument
/** 
 * Input/output argument of a function or a stored procedure.
**/
export class Argument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=argumentKind" })
  argumentKind?: ArgumentArgumentKindEnum;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: StandardSqlDataType;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: ArgumentModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
