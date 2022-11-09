import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardSqlDataType } from "./standardsqldatatype";
import { StandardSqlStructType } from "./standardsqlstructtype";

export enum StandardSqlDataTypeTypeKindEnum {
    TypeKindUnspecified = "TYPE_KIND_UNSPECIFIED"
,    Int64 = "INT64"
,    Bool = "BOOL"
,    Float64 = "FLOAT64"
,    String = "STRING"
,    Bytes = "BYTES"
,    Timestamp = "TIMESTAMP"
,    Date = "DATE"
,    Time = "TIME"
,    Datetime = "DATETIME"
,    Interval = "INTERVAL"
,    Geography = "GEOGRAPHY"
,    Numeric = "NUMERIC"
,    Bignumeric = "BIGNUMERIC"
,    Json = "JSON"
,    Array = "ARRAY"
,    Struct = "STRUCT"
}


// StandardSqlDataType
/** 
 * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
**/
export class StandardSqlDataType extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayElementType" })
  arrayElementType?: StandardSqlDataType;

  @Metadata({ data: "json, name=structType" })
  structType?: StandardSqlStructType;

  @Metadata({ data: "json, name=typeKind" })
  typeKind?: StandardSqlDataTypeTypeKindEnum;
}
